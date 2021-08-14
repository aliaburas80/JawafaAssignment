import InputBox from "../../components/form/input";
import CloseButton from "../../components/UI/buttons/close";
import style from "./addNewClient.module.scss";
import {useRef } from "react";
import GreenButton from "../../components/UI/buttons/GreenButton";
const AddNewClient = (props) => {
  const background = useRef(null);
  const form = useRef(null);
  const getValue = (value) => {
    console.log("value", value);
  };
  const saveHandler = (e) => {
      props.closeMe()
  }

  const closeHandler = (e) => {
    props.closeMe()
}
  
  return (
    <div className={style.containerOverLay}>
      <div
        className={style.overLayContainer}
        ref={background}
      ></div>
      <div className={style.formArea}>
        <div className={style.formHeaderTitle}>
          <h3>Add new Client</h3>
          <CloseButton onClick={props.clickHandler} clickHandler={closeHandler}/>
        </div>
        <div className={style.formBody} ref={form}>
          <div className={style.section}>
            <h3 className={style.formTitle}>Client Details:</h3>
            <table>
              <tbody>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.section}>
            <h3 className={style.formTitle}>Client Details:</h3>
            <table>
              <tbody>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.section}>
            <h3 className={style.formTitle}>Client Details:</h3>
            <table>
              <tbody>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={style.lable}>Owner Full Name</td>
                  <td>
                    <InputBox
                      placeholder="Owner full Name"
                      getValue={getValue}
                      classes={style.inputStyle}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
          <GreenButton buttonTitle='Save' clickHandler={saveHandler}/>
        </div>
      </div>
    </div>
  );
};

export default AddNewClient;
