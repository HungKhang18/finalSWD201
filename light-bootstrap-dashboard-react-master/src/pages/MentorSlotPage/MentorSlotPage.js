import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MentorslotPageTable from "components/MentorSlotPage/MentorSlotPageTable";
import "@progress/kendo-theme-default/dist/all.css";
function MentorSlotPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <header>
        <MentorslotPageTable />
      </header>
    </>
  );
}
export default MentorSlotPage;
