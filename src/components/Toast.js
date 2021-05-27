import React from "react";
import styled from "styled-components";

const Toast = ({ toast, toastType }) => {
  let icon =
    toastType.type === "success"
      ? "fas fa-check-circle"
      : toastType.type === "aware" || toastType.type === "info"
      ? "fas fa-exclamation-circle"
      : toastType.type === "login"
      ? "fas fa-circle-notch"
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
  right: 50%;
  transform: translateX(50%);
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
  &.info,
  &.login {
    opacity: 1;
    animation: shake 0.3s ease-in;
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
  &.info,
  &.login {
    background-color: dodgerblue;
  }

  &.login {
    i {
      animation: spin 0.5s infinite;
      font-size: 2rem;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes shake {
    0% {
      transform: translateX(45%);
    }
    25% {
      transform: translateX(55%);
    }
    50% {
      transform: translateX(45%);
    }
    75% {
      transform: translateX(55%);
    }
    100% {
      transform: translateX(50%);
    }
  }
`;
export default Toast;
