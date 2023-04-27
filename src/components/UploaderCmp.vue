<template>
  <base-card>
    <base-card>
      <div>
        <h1>Upload files</h1>
        <label for="file-input" class="file">
          <img
            src="https://icons.iconarchive.com/icons/pelfusion/flat-folder/128/Upload-Folder-icon.png"
          />
        
        <input
          id="file-input"
          type="file"
          accept="image/*,.doc,.docx,application/msword,application/pdf,.pdf,
        application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          @change="previewFile"
        />
        </label>
        <p v-if="fileData != null" class="preview">{{this.fileData.name}}</p>
      </div>
      <div>
        <p>
          Progress: {{ uploadValue.toFixed() + "%" }}
          <progress :value="uploadValue" max="100"></progress>
        </p>
      </div>
      <div>
        <!-- <img :src="file" class="preview"> --><br />
        <base-button v-if="fileData != null" @click="onUpload">Upload</base-button>
      </div>
    </base-card>
    <base-card>
      <div>
        <h1>Uploaded files:</h1>
        <ul>
          <li v-for="(item, index) in mylist" :key="index">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </base-card>
  </base-card>
</template>

<script>
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";
//import { getDatabase, child, get } from "firebase/database";

export default {
  data() {
    return {
      fileData: null,
      file: null,
      mylist: [],
      uploadValue: 0,
    };
  },
  created() {
    //this.download();
    this.download();
  },
  methods: {
    previewFile(event) {
      this.uploadValue = 0;
      this.file = null;
      this.fileData = event.target.files[0];
    },

    onUpload() {
      const storage = getStorage();

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: this.fileData.type,
      };

      // Upload file and metadata to the object
      const storageRef = ref(storage, `${this.fileData.name}`);
      const uploadTask = uploadBytesResumable(
        storageRef,
        this.fileData,
        metadata
      );

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        `state_changed`,
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //console.log("Upload is " + progress + "% done");
          // switch (snapshot.state) {
          //   case "paused":
          //     //console.log("Upload is paused");
          //     //uploadTask.pause();
          //     break;
          //   case "running":
          //     //console.log("Upload is running");
          //     //uploadTask.resume();
          //     break;
          // }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          this.uploadValue = 100;
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.mylist.push({ name: this.fileData.name, url: downloadURL });
          });
        }
      );
    },
    download() {
      const storage = getStorage();
      listAll(ref(storage, "/")).then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(ref(storage, itemRef.name)).then((downloadUrl) => {
            this.mylist.push({ name: itemRef.name, url: downloadUrl });
          });
        });
      });
    },
  },
};
</script>

<style scoped>
a:link {
  color: black;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: rgb(46, 45, 45);
}

/* mouse over link */
a:hover {
  color: rgb(65, 95, 246);
}
ul {
  list-style: none;
}
label.file {
		position: relative;
		display: block;
		width: 100%;
		font-size: 80%;
		text-align: center;
		/* text-transform: uppercase; */
		/* border: 2px dashed #ccc; */
		/* margin: 3rem 0;
		padding: 3rem; */
}
input[type=file] {
		position: absolute;
		top: 0;
    left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		outline: 0;
    cursor: pointer;
		/* border: 1px solid red; */
}
.preview{
  font-size: .7rem;
}

</style>
