import React,{useState} from "react"
import "./18.FormValidation.css"

function FormValidation() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState('');
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\s+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            isValid = false; 
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        }
        else if (password.length < 6) {
            newErrors.password = 'Password Should be at list 6 character long';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const submittedData = { name, email, password };
            setSubmittedData(submittedData);
            console.log("Form submitted successfully ", submittedData);
        }
       
    };
  return (
    <>
          <form onSubmit={handleSubmit}>
              <div>
                  <label>Name : </label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div>
                  <label>Email : </label>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div>
                  <label>Password : </label>
                  <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                  {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <button type="submit">Submit</button>
          </form>
          {
              submittedData && <div>
                  <h2>Submitted Data :</h2>
                  <p>Name : {submittedData.name}</p>
                  <p>Name : { submittedData.email}</p>
                  <p>Name : { submittedData.password}</p>
              </div>
          }
    </>
  )
}

export default FormValidation
