import {useState, useContext} from 'react';
import {UserAdmminContext} from '../Context/UserAdmminContext';
import {useNavigate} from 'react-router-dom';

//Renders a component for the admin login form.
const AdminLogin = () => {
    const initialState = {
        email: '',
        password: '',
    };
    const [formData, setFormData] = useState(initialState);
    const {setUserAdmin} = useContext(UserAdmminContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //This function handles the change event of a form input element.
    const handleChange = (e) => {
        console.log('handleChange', e.target.name, e.target.value);
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    //Handles form submission by making a POST request to the server.
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        console.log('handleSubmit', formData);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            setLoading(false);
            if (r.ok) {
                setError([]);
                r.json().then((userAdmin) => {
                    console.log('handleSubmit', userAdmin);
                    setUserAdmin(userAdmin);
                    navigate("/")
                });
            } else {
                r.json().then((err) => {
                    console.log('handleSubmit', err.error);
                    setError(err.error)
                });
            }
        })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
        setFormData(initialState);
    }

    return (
        <div className='Login'>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit" disabled={loading}>Submit</button>
                {error.map((err, index) => (
                    <li style={{ color: "black" }} key={index}>{err}</li>
                ))}
            </form>
        </div>
    );
}
export default AdminLogin;