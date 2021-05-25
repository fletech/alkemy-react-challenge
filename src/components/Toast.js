import React from "react";
import styled from "styled-components";

const Toast = ({ toast, toastType }) => {
  let icon =
    toastType.type === "success"
      ? "fas fa-check-circle"
      : toastType.type === "aware" || "info"
      ? "fas fa-exclamation-circle"
      : "fas fa-trash-alt";
  return (
    toast && (
      <ToastStyled className={`${toastType.type}`}>
        <div className="message">
          <i className={icon}></i>
          <p>{toastType.message}</p>
        </div>
      </ToastStyled>
    )
  );
};
const ToastStyled = styled.div`
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 15vh;
  right: 5rem;
  z-index: 1000;
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 1px 1px 10px #888888;
  padding: 1rem;
  div.message {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    i {
      margin-right: 10px;
      color: white;
      font-size: 0.8rem;
    }
    p {
      font-size: 0.9rem;
      color: white;
      font-family: "Chivo";
      font-weight: 500;
      padding-bottom: 3px;
    }
  }

  &.success,
  &.deleted,
  &.aware,
  &.info {
    opacity: 1;
  }
  &.success {
    background-color: #4a8b1e;
  }
  &.aware {
    background-color: #d1bf19;
  }
  &.deleted {
    background-color: #e43636;
  }
  &.info {
    background-color: dodgerblue;
  }
`;
export default Toast;
