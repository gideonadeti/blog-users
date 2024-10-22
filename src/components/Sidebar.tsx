import Form from "react-bootstrap/Form";

import { useTagsStore } from "../stores/tags";

export default function Sidebar() {
  const { tags } = useTagsStore();

  return (
    <div
      className="container-fluid position-absolute top-0 bottom-0 border-end d-flex flex-column justify-content-between py-3"
      style={{ width: "276px" }}
    >
      <Form.Select
        multiple
        className="h-100"
        style={{ scrollbarWidth: "thin" }}
      >
        {tags.map((tag) => (
          <option key={tag.id} value={tag.name}>
            {tag.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
