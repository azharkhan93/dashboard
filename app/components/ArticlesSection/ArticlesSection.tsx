"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
// import {Button3} from "./components/Buttons"

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });




export const ArticlesSection = () => {

    const [localQuillContent, setLocalQuillContent] = useState('');
  const placeholder = 'Start Writing...';

  const handleQuillChange = (content: any) => {
    setLocalQuillContent(content);
  };
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6] }],
      ['bold', 'italic'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      // [{ 'script': 'sub' }, { 'script': 'super' }],
      ['link', 'image'],
      // ['custom-preview', 'custom-button'],
      // ['custom-heading-paragraph', 'custom-new-line'],
      // [{ 'align': [] }], 
      // ['custom-button'],
      ['clean']


    ]
  };
    return (

        <>
            <ReactQuill
                theme="snow"
                value={localQuillContent}
                onChange={handleQuillChange}
                placeholder={placeholder}
                modules={modules} 
                />

              
        
        </>
    )
}