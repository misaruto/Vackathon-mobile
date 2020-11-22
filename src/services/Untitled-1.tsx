      FileSystem.uploadAsync("http://192.168.0.46:3333/speech", info.uri, {
        headers: {
          "ContentType/":
            "multipart/form-data; boundary=bd9f322b-65a3-42f8-89f6-eefaeab56493",
        },
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: "audio",
      })
        .then((response) => {
          console.log(JSON.stringify(response));
        })
        .catch((error) => {
          console.log(error);
        });

        // 1. initialize request
      const xhr = new XMLHttpRequest();
      // 2. open request
      xhr.open("POST", "http://192.168.0.46:3333/speech");
      xhr.setRequestHeader("Content-Type", "audio/m4a");
      // 3. set up callback for request
      xhr.onload = () => {
        const response = JSON.parse(xhr.response);

        console.log(response);
        // ... do something with the successful response
      };
      // 4. catch for request error
      xhr.onerror = (e) => {
        console.log(e, "upload failed");
      };
      // 4. catch for request timeout
      xhr.ontimeout = (e) => {
        console.log(e, "upload timeout");
      };

      // 6. upload the request
      xhr.send(formData);
      // 7. track upload progress
      if (xhr.upload) {
        // track the upload progress
        xhr.upload.onprogress = ({ total, loaded }) => {
          const uploadProgress = loaded / total;
          console.log(uploadProgress);
        };
      }







       formData.append("audio", info.uri);
       api
         .put("/speech", formData, {
           headers: { "Content-Type": "multipart/form-data" },
         })
         .then((response) => {
           console.log(JSON.stringify(response));
         })
         .catch((err) => {
           console.log(err);
         });