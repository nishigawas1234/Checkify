import React, { useContext, useEffect, useState } from "react";
import { Box, VStack, Text, Link, Flex, Button } from "@chakra-ui/react";
import { Table, AddItem } from "../Components";
import { Add } from "../Components/Icons";
import * as Yup from "yup";
import { todaysDate } from "../Services/helpers/todaysDate";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../Services/context/AuthContext";


const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const initialValues = {
  title: "",
  description: "",
};

export default function Work() {
    const { userData } = useContext(AuthContext);
  const [isAdd, setIsAdd] = useState();
  const [tasks, getTasks] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPending , setIsPending] = useState()

  useEffect(()=>{
    getTaskData()
  },[])


  const getTaskData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `/task/getData/${userData.uuid}`
      );
      const filterData = response.data.tasks.filter(item => item.isPersonal !== true)
      getTasks(filterData);
      setIsAdd(false);
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };
  
  const handleTaskSubmit = async (values)=>{
    try {
      const response = await axios.post(
        `/task/addData/${userData.uuid}`,
        {
          title: values.title,
          isChecked: false,
          isPersonal: true,
          description:values.description
        }
      );
     if(response.data.success){
      toast.success("Task added successfully!");
      getTaskData();
      setIsAdd(false);
     }
    } catch (err) {
      toast.error("Failed to add Task. Please try again.");
      setError(err.message || "An error occurred");
    }
  }

  const filterOnlyPending = ()=>{
    if(isPending){
      setIsPending(false)
      getTaskData()
    }else{
      setIsPending(true)
      const filterData = tasks.filter(item => item.isChecked !== true)
      getTasks(filterData)
    }
   
  }

  return (
    <Box bg="#0F0F0F" ms="250px" p={10}>
      <Text color="#fff" fontSize="3xl">
        Your Task
      </Text>
      <Text color="#808B9A" fontSize="sm" mt={1}>
        {todaysDate()}
      </Text>
      <Flex mt={10} justifyContent="end">
        <Button type="submit" color="#fff" bg="#39610f" colorScheme="green" mr={6} onClick={filterOnlyPending}>
          {isPending ? "Show All" : "Show only Pending"}
        </Button>
      </Flex>
      <Box mt={5}>
        <Table data={tasks}/>
      </Box>
      <Box pos="fixed" bottom="24px" right="24px">
        <Add
          onClick={() => {
            setIsAdd(true);
          }}
        />
      </Box>

      <AddItem
        isOpen={isAdd}
        onClose={() => {
          setIsAdd(false);
        }}
        type="task"
        handleSubmit={handleTaskSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Box>
  );
}
