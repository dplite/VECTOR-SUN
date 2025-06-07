import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";
import { Box, Button } from "@mui/material";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://vectorshift-assignment.onrender.com/pipelines/parse",
        { nodes, edges },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      toast.success(
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span>
            <strong>Nodes:</strong> {result.num_nodes}
          </span>
          <span>
            <strong>Edges:</strong> {result.num_edges}
          </span>
          <span>
            <strong>Is DAG:</strong> {result.is_dag ? "Yes" : "No"}
          </span>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: "#4caf50", // Green background
            color: "#fff",
            fontSize: "16px",
          },
          transition: Bounce,
        }
      );
    } catch (error) {
      console.error("Error submitting the pipeline:", error);
      toast.error("Submission failed! Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          backgroundColor: "#f44336", // Red background for error
          color: "#fff",
        },
        transition: Bounce,
      });
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 40,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={handleSubmit}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#4caf50", // Green
          "&:hover": {
            backgroundColor: "#388e3c", // Darker green
          },
          color: "#fff",
        }}
      >
        Submit
      </Button>

      <ToastContainer />
    </Box>
  );
};
