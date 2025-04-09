import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text=3xl my-7 font-semibold text-slate-700'>
      CreatePost
      </h1>

      
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <Input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="w-full sm:w-3/4 h-12 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            // onChange={(e) =>
            //   setFormData({ ...formData, title: e.target.value })
            // }
          />

        <Select>
            <SelectTrigger className="w-full sm:w-1/4 h-12 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="worldnews">World News</SelectItem>
                <SelectItem value="sportsnews">Sports News</SelectItem>
                <SelectItem value="localnews">Local News</SelectItem>
              </SelectGroup>
            </SelectContent>

        </Select>
          </div>

          <div className="flex gap-4 items-center justify-between border-4 border-slate-600 border-dotted p-3">
          <Input
            type="file"
            accept="image/*"
            // onChange={(e) => setFile(e.target.files[0])}
          />

          <Button
            type="button"
            className="bg-slate-700"
            // onClick={handleUploadImage}
          >Upload Image
            {/* {imageUploading ? "Uploading..." : "Upload Image"} */}
          </Button>

          </div>

          <ReactQuill
          theme="snow"
          placeholder="Write something here..."
          className="h-72  mb-12"
          required
        />

      <Button
          type="submit"
          className="h-12 bg-green-600 font-semibold max-sm:mt-5 text-md"
        >
          Publish Your Article
        </Button>



      </form>
      </div>
  )
}

export default CreatePost