import { useReducer } from "react";
import { useToast } from "@chakra-ui/react";
const initialState = {
  name: "",
  lastname: "",
  country: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "lastname": {
      return {
        ...state,
        lastname: action.payload,
      };
    }

    case "country": {
      return {
        ...state,
        country: action.payload,
      };
    }

    case "submit": {
      return {};
    }
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toast = useToast();

 async function handleSubmit(e) {
    e.preventDefault();
    const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 5000);
      });
  
      try {
        toast.promise(examplePromise, {
            success: { title: "Login successfull", description: "you've successfully registered" },
            error: { title: "Login Failed", description: "Something wrong" },
            loading: { title: "Loading...", description: "Please wait" },
          });
      } catch (error) {
        console.log(error);
      }
      

    dispatch({
      type: "submit",
      payload: {
        ...state,
      },
    });
    // Create an example promise that resolves in 5s
    
  }

  const { name, lastname, country } = state;
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <form action="/action_page.php">
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          value={name}
          onChange={(e) =>
            dispatch({
              type: "name",

              payload: {
                ...state,
                name: e.target.value,
              },
            })
          }
        />

        <label>Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          value={lastname}
          onChange={(e) =>
            dispatch({
              type: "lastname",
              payload: {
                ...state,
                lastname: e.target.value,
              },
            })
          }
        />

        <label>Country</label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={(e) =>
            dispatch({
              type: "country",
              payload: {
                ...state,
                country: e.target.value,
              },
            })
          }
        >
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
}

export default Form;
