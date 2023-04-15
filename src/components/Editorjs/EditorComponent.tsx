import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS, DEFAULT_INITIAL_DATA } from "./constant.d";

interface Props {}

const EditorComponent = React.forwardRef((props: Props, ejInstance: any) => {
  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'editorjs',
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      tools: EDITOR_JS_TOOLS,

      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      onReady: () => {
        ejInstance.current = editor;
      },
    });
  };

  // This will run only once
  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <div id='editorjs' />
})

export default EditorComponent;
