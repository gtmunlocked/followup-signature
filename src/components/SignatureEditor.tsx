import React from "react";

interface Props {
  value: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
}

export default function SignatureEditor({ value, onChange, readOnly }: Props) {
  return (
    <div>
      <h2>Signature Block</h2>
      <textarea
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        readOnly={readOnly}
        rows={6}
        style={{ width: "100%", fontFamily: "monospace" }}
      />
    </div>
  );
}