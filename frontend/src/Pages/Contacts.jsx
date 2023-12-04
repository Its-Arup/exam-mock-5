import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { createUser, getAlluser } from "../Redux/user_reducer/action";
import TableComponent from "../Components/TableComponent";

function Contacts() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: 999999999,
    label: "",
    booked_slots: [],
  });

  const handelChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelSubmit = () => {
    dispatch(createUser(user));
  };

  useEffect(() => {
    dispatch(getAlluser());
  }, []);

  

  return (
    <div>
      <Button onClick={onOpen}>Add Contact</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Full Name"
                name="name"
                value={user.name}
                onChange={handelChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={handelChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Phone"
                type="number"
                name="phone"
                value={user.phone}
                onChange={handelChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <Select name="label" onChange={handelChange}>
                <option value="">Label</option>
                <option value="work">work</option>
                <option value="school">school</option>
                <option value="friends">friends</option>
                <option value="family">family</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ------------------------ */}
      <TableComponent/>
    </div>
  );
}

export default Contacts;
