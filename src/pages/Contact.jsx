import { useState } from "react";
import * as images from "../assets/images";

import "./Contact.css";

function Contact(){
    const [file, setFile] = useState(null);

    const [form, setForm] = useState({
        company: "",
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) setFile(selected);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const formatPhone = (value) => {
        const onlyNum = value.replace(/[^0-9]/g, "");

        if (onlyNum.length <= 3) return onlyNum;
        if (onlyNum.length <= 7)
            return `${onlyNum.slice(0,3)}-${onlyNum.slice(3)}`;
        return `${onlyNum.slice(0,3)}-${onlyNum.slice(3,7)}-${onlyNum.slice(7,11)}`;
    };
    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setForm(prev => ({
            ...prev,
            phone: formatted
        }));
    };
    const handleSubmit = () => {
        if (!form.company) return alert("회사명을 입력해주세요.");
        if (!form.name) return alert("담당자명을 입력해주세요.");
        if (!form.phone) return alert("연락처를 입력해주세요.");

        if (form.phone.length < 13) {
            return alert("휴대폰 번호를 정확히 입력해주세요.");
        }

        if (!form.email) return alert("이메일을 입력해주세요.");

        if (!form.email.includes("@")) {
            return alert("이메일 형식이 올바르지 않습니다.");
        }

        if (!form.message) return alert("메시지를 입력해주세요.");

        alert("전송 완료!");

        setForm({
            company: "",
            name: "",
            phone: "",
            email: "",
            message: ""
        });

        setFile(null); 
    };
    

    const removeFile = () => {
        setFile(null);
    };

    return(
        <section className="contact-page">
            <p className="contact-tit">Contact</p>
            <div className="contact-form">
                <div className="inner">
                    <div className={`contact-cont text-input company ${form.company ? "filled" : ""}`}>
                        <input type="text" 
                        name="company" 
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company" />
                    </div>
                    <div className={`contact-cont text-input name ${form.name ? "filled" : ""}`}>
                        <input type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name" />
                    </div>
                    <div className={`contact-cont text-input phone ${form.phone ? "filled" : ""}`}>
                        <input type="tel" 
                        name="phone"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        maxLength={13}
                        placeholder="H.P" />
                    </div>
                    <div className={`contact-cont text-input email ${form.email ? "filled" : ""}`}>
                        <input type="email" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email" />
                    </div>
                    <div className={`contact-cont text-input message ${form.message ? "filled" : ""}`}>
                        <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Message" />
                    </div>
                    <div className="contact-cont file">
                        <label htmlFor="fileInput" className="file-ui">
                            <img src={images.fileBtn} alt="file" />
                            <span>파일첨부</span>
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            className="real-file"
                            onChange={handleFileChange}
                        />
                        {file && (
                            <div className="file-preview">
                                <span>
                                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                                </span>
                                <button onClick={removeFile}>✕</button>
                            </div>
                        )}
                    </div>
                    <div className="contact-cont text-input send-btn"
                    onClick={handleSubmit}>
                        <p className="send-txt">Send</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;