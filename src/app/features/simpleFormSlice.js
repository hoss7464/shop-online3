import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//---------------------------------------------------------------------------
// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone number regex
const phoneRegex = /^[0-9]{11}$/;
// Password regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
//---------------------------------------------------------------------------
//Initial states
const initialState = {
  forms: {
    //states for register form
    signupForm: {
      fullname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    //states for sign in form
    loginForm: {
      phoneNumber: "",
      password: "",
    },
  },
  //state for errors
  errors: {
    signupForm: {},
    loginForm: {},
  },
};
//----------------------------------------------------------------------------
//Thunk api for register form submission
export const submitForm = createAsyncThunk(
  "simpleForm/submitForm",
  async ({ formId, formData }, thunkAPI) => {
    // Validation check
    const requiredFields = Object.keys(formData);
    const errors = requiredFields.reduce((acc, field) => {
      if (!formData[field]) {
        acc[field] = "This field is required";
      }

      return acc;
    }, {});

    // Additional validation for email
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Additional validation for phone number
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number format";
    }

    // Additional validation for password
    if (formData.password && !passwordRegex.test(formData.password)) {
      errors.password = "U,u,1234";
    }

    // Additional validation for confirmPassword
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      thunkAPI.dispatch(setErrors({ formId, errors }));
      return thunkAPI.rejectWithValue(errors);
    }
  }

);
//-------------------------------------------------------------------------
export const loginForm = createAsyncThunk(
  "simpleForm/loginForm",
  async ({ formData }, thunkAPI) => {
    const { phoneNumber, password } = formData;

    const errors = {};
    if (!phoneNumber) errors.phoneNumber = "This field is required";
    if (!password) errors.password = "This field is required";
    if (Object.keys(errors).length > 0) {
      thunkAPI.dispatch(setErrors({ formId: "loginForm", errors }));
      return thunkAPI.rejectWithValue(errors);
    }
  }
);
//---------------------------------------------------------------------------
//Form functions 
export const simpleFormSlice = createSlice({
  name: "simpleForm",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { formId, field, value } = action.payload;
      if (state.forms[formId]) {
        state.forms[formId][field] = value;
        // Clear the error for the field
        if (state.errors[formId] && state.errors[formId][field]) {
          state.errors[formId][field] = "";
        }
      }
    },
    setErrors: (state, action) => {
      const { formId, errors } = action.payload;
      if (state.errors[formId]) {
        state.errors[formId] = errors;
      }
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(submitForm.fulfilled, (state, action) => {
      const { formId } = action.payload;
      if (formId === "signupForm") {
        state.forms[formId] = {
          fullname: "",
          phone_number: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
      } else if (formId === "loginForm") {
        state.forms[formId] = { email: "", password: "" };
      }
    });
  },
});

export const { updateForm, setErrors } = simpleFormSlice.actions;

export default simpleFormSlice.reducer;