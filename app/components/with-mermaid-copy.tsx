import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PropsWithChildren, RefObject } from "react";

const WithMermaidCopyButton = (
  props: PropsWithChildren<{ ref: RefObject<HTMLDivElement> }>
) => {
  const { children, ref } = props;
  const downloadAsImage = () => {
    if (!ref.current) return;

    const svg = ref.current.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);

    const encoded = encodeURIComponent(svgStr);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encoded}`;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        if (!blob) return;

        const a = document.createElement("a");
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = "diagram.png";
        a.click();
        URL.revokeObjectURL(url);
      });
    };

    img.src = dataUrl;
  };
  return (
    <div>
      <div className="relative ">
        <Button
          variant={"ghost"}
          className="cursor-pointer absolute right-0"
          onClick={downloadAsImage}
          aria-label="Download diagram"
        >
          <Download size={16} />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default WithMermaidCopyButton;
