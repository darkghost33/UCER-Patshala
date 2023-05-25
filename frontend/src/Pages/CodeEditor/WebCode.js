import React, { useState, useEffect } from "react";
import Editor from "./CodeEditor";
import '../../css/CodeEditor.css'
const WebCode = () => {
  const [html, setHtml] = useState("<h1>Just type your code to see changes in real time </h1>");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
      localStorage.setItem("playground", JSON.stringify({ html, css, js }));
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  useEffect(() => {
    const { html, css, js } = JSON.parse(
      localStorage.getItem("playground")
    ) || { html: "<h1>Just type your code to see changes in real time </h1>", css: "", js: "" };
    setHtml(html);
    setCss(css);
    setJs(js);
  }, []);
  console.log(html, css, js);
  return (
    <>
        <div className="pane top-pane">
          <Editor
            language={"html"}
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language={"css"}
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language={"js"}
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width={"100%"}
            height="100%"
          ></iframe>
      </div>
    </>
  );
};

export default WebCode;