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
  Container,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser } from "../Redux/user_reducer/action";

function TableComponent() {
  const ALLusers = useSelector((store) => {
    return store.userReducer;
  });

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: 999999999,
    label: "",
    booked_slots: [],
  });
  const [productid, setProductId] = useState(0);

  const handelChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelEditbutton = (id) => {
    setProductId(id);
    onOpen();
  };

  const handelEdit = () => {
    dispatch(editUser(productid, user));
  };

  const handelDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <Container maxW="980px" mt={30}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Label</Th>
              <Th>Acton</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ALLusers.users?.map((ele) => {
              return (
                <Tr key={ele._id}>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.phone}</Td>
                  <Td>{ele.label}</Td>
                  <Td>
                    <Button
                    mr={2}
                      colorScheme="green"
                      onClick={() => {
                        handelEditbutton(ele._id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => handelDelete(ele._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
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
            <Button colorScheme="blue" mr={3} onClick={handelEdit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default TableComponent;
