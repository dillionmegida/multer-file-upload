const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const express = require("express");

const app = express();

app.use(express.json());

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
	console.dir(req.body);
	console.log(req.files);
	res.json({ message: "Successfully uploaded files" });
}

app.listen(5000, () => {
	console.log(`Server started...`);
});
