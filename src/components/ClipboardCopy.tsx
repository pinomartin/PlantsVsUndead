import { useState } from "react";

interface ClipboardCopyProps {
    copyText: string;
}

const ClipboardCopy = ({ copyText }: ClipboardCopyProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyTextToClipboard = async(text:string) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
          } else {
            return document.execCommand('copy', true, text);
          }
    }
    const handleCopyClick = () => {
        copyTextToClipboard(copyText)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
      return (
        <div className="clipboardCopy">
          {/* <input type="text" value={copyText} readOnly /> */}
          <code>{copyText}</code>
         
          <button onClick={handleCopyClick}>
            <span>{isCopied ? 'Copied!' : 'Copy'}</span>
          </button>
          <span style={{fontSize: '0.75em', fontFamily: 'monospace'}}>{isCopied && 'Thank you 🙌'}</span>
        </div>
      );
};

export default ClipboardCopy
