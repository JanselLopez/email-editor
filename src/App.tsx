import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

export default function App() {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { html } = data;
      console.log(html);
    });
  };

  return (
    <div>
      <button onClick={exportHtml}>Guardar</button>

      <EmailEditor
        ref={emailEditorRef}
        style={{ height: "600px" }}
        onReady={(unlayer)=>{
          unlayer.setBodyValues({
            contentWidth: 'inherit'
          })
        }}
        options={{
          appearance: {
            layout: {
              defaultWidth: '100%'
            },
          },
          displayMode:"email",
          version:"latest",
        }}
      />
    </div>
  );
}