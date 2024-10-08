import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";
import { useDispatch, useSelector } from "react-redux";
import {
  useAvailableFriendsQuery,
  useNewGroupMutation,
} from "../../redux/api/api";
import { useAsyncMutation, useErrors } from "../../hooks/hook";
import { setIsNewGroup } from "../../redux/reducers/misc";
import toast from "react-hot-toast";
import styles from "../styles/App.module.css";

const NewGroup = () => {
  const { isNewGroup } = useSelector((state) => state.misc);
  const dispatch = useDispatch();

  const { isError, isLoading, error, data } = useAvailableFriendsQuery();

  const [newGroup, isLoadingNewGroup] = useAsyncMutation(useNewGroupMutation);

  const groupName = useInputValidation("");

  const [selectedMembers, setSelectedMembers] = useState([]);

  const errors = [
    {
      isError,
      error,
    },
  ];

  useErrors(errors);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const submitHandler = () => {
    if (!groupName.value) return toast.error("Group name is required");

    if (selectedMembers.length < 2)
      return toast.error("Please Select Atleast 3 Members Including You");

    newGroup("Creating New Group...", {
      name: groupName.value,
      members: selectedMembers,
    });

    closeHandler();
  };

  const closeHandler = () => {
    dispatch(setIsNewGroup(false));
  };

  return (
    <Dialog onClose={closeHandler} open={isNewGroup}>
      <Stack
        p={{ xs: "1rem", sm: "3rem" }}
        width={{ xs: "16rem", sm: "25rem" }} // I have made a change because in mobile it is not good looking
        spacing={"1.5rem"}
      >
        {/* <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle> */}
        <span className={styles.newGroupTitle}>New Group</span>

        {/* <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        /> */}
        <div className={styles.inputContainer}>
          <input
            value={groupName.value}
            onChange={groupName.changeHandler}
            required
          />
          <label>Group Name</label>
        </div>

        <Typography variant="body1">Select Members</Typography>

        <Stack maxHeight={"16rem"} overflow={"auto"}>
          {isLoading ? (
            <Skeleton />
          ) : (
            data?.friends?.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          )}
        </Stack>

        <Stack direction={"column"} justifyContent={"space-evenly"}>
          {/* <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
            disabled={isLoadingNewGroup}
          >
            Create
          </Button> */}
          <button
            className={styles.loginButton}
            onClick={submitHandler}
            disabled={isLoadingNewGroup}
          >
            Create Group
          </button>
          {/* <Button
            variant="text"
            color="error"
            size="large"
            onClick={closeHandler}
          >
            Cancel
          </Button> */}
          <button
            className={styles.signup}
            onClick={closeHandler}
            style={{ margin: "0" }}
          >
            Cancel
          </button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
