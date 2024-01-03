import React, { useState } from "react";
import {
    Typography,
    Button,
    Box,
    Modal,
    TextField,
    IconButton,
    InputAdornment,
    Link,
    Grid,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { useIsMobile } from "../../utils/utils";
import PasswordValidation from "../ui/PasswordValidation";


const ModalRegister = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        dateofbirth: "",
        clientposition: "",
        agencyname: "",
        agencyaddress: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const isMobile = useIsMobile();

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signing up with", formData);
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            gender: "",
            dateofbirth: "",
            clientposition: "",
            agencyname: "",
            agencyaddress: "",
        });
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    outline: "none",
                    width: isMobile ? "260px" : "370px",
                    p: "50px",
                    overflow: "scroll",
                    height: "80%"
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={handleClose} sx={{ p: "0" }}>
                        <CloseIcon sx={{ fontSize: "20px", color: "#848484" }} />
                    </IconButton>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "700", textAlign: "center" }}>
                        Register
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Inter, sans-serif", fontWeight: "400", textAlign: "center", color: "gray", mt: "5px" }}>
                        Register so you can choose and request our talent
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "20px", borderBottom: "1px solid #DBDBDB", py: "20px", mt: "20px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="First Name"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                                value={formData.firstname}
                                onChange={handleChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Last Name"
                                name="lastname"
                                variant="outlined"
                                fullWidth
                                value={formData.lastname}
                                onChange={handleChange}
                                size="small"
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        size="small"
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff sx={{ fontSize: "18px" }} /> : <Visibility sx={{ fontSize: "18px" }} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <PasswordValidation password={formData.password} />

                    <TextField
                        label="Type in your password again"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff sx={{ fontSize: "18px" }} /> : <Visibility sx={{ fontSize: "18px" }} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControl component="fieldset" sx={{ mt: 2 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-label="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                        <InputLabel id="clientposition">Client Position</InputLabel>
                        <Select
                            labelId="clientposition"
                            id="clientposition"
                            name="clientposition"
                            value={formData.clientposition}
                            onChange={handleChange}
                            label="Client Position"
                        >
                            <MenuItem value="hrd">HRD</MenuItem>
                            <MenuItem value="productowner">Product Owner</MenuItem>
                            <MenuItem value="projectmanager">Project Manager</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="Agency Name"
                        name="agencyname"
                        variant="outlined"
                        fullWidth
                        value={formData.agencyname}
                        onChange={handleChange}
                        size="small"
                    />

                    <TextField
                        label="Agency Address"
                        name="agencyaddress"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={formData.agencyaddress}
                        onChange={handleChange}
                        size="small"
                    />

                    <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ borderRadius: "5px", paddingX: "20px", paddingY: "7px", fontSize: "13px", textTransform: "none", fontFamily: "Inter, sans-serif", width: "100%", mt: "20px" }}>
                        Sign Up
                    </Button>
                </Box>

                <Button variant="outlined" color="inherit" onClick={handleSubmit} sx={{ borderRadius: "5px", paddingX: "20px", paddingY: "7px", fontSize: "13px", textTransform: "none", fontFamily: "Inter, sans-serif", width: "100%", color: "#848484", justifyContent: "center", mt: "30px" }}>
                    <GoogleIcon sx={{ marginRight: "5px", fontSize: "18px" }} />
                    Sign Up with Google
                </Button>

                <Typography variant="body2" sx={{ textAlign: "center", mt: "50px" }}>
                    Already Have an account? <Link href="#" onClick={() => console.log("Navigate to registration page")} sx={{ textDecoration: "none" }}>Sign In Here</Link>.
                </Typography>
            </Box>
        </Modal>
    );
};

export default ModalRegister;
