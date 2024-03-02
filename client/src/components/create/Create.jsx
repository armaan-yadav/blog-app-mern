import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const Create = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummmary] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  async function formSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("description", description);
    data.set("file", file[0]);

    const response = await fetch("http://localhost:5000/api/blog/create", {
      method: "POST",
      body: data,
    });
    console.log(await response.json());
  }

  return (
    <div className="bg-gray-300 w-full h-[calc(100vh-66px)] ">
      <form
        action=""
        onSubmit={formSubmit}
        className="bg-pink-300 flex flex-col"
      >
        <input
          type="text"
          name="Title"
          id=""
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="Summary"
          id=""
          placeholder="Summary"
          value={summary}
          onChange={(e) => {
            setSummmary(e.target.value);
          }}
        />
        <input
          type="file"
          name="File"
          onChange={(e) => setFile(e.target.files)}
        />
        <ReactQuill
          value={description}
          onChange={setDescription}
          modules={modules}
          formats={formats}
        ></ReactQuill>
        <button>Post</button>
      </form>
    </div>
  );
};

export default Create;
