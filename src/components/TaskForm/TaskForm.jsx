import { useEffect, useState } from 'react';
import {
  Form,
  EditButton,
  FormGroup,
  Input,
  Label,
  RadioButtonsInput,
  RadioButtonsLabel,
  RadioButtonCustom,
  CancelButton,
  RadioContainer,
  WrapRadio,
  WrapButton,
  IconEditPen,
  IconPlus,
} from './TaskForm.styled';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { addTask, updateTask } from 'redux/tasks/operations';
import { selectDate } from 'redux/date/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { taskFormSchema } from './taskFormSchema';

const emptyTask = {
  title: '',
  start: '00:00',
  end: '00:00',
  priority: 'low',
  category: 'to-do',
};

export const TaskForm = ({ task, handlerCloseModal }) => {
  const [operation, setOperation] = useState('create');
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task._id) setOperation('edit');
  }, [task]);

  const handleSubmit = async values => {
    const { start, end } = values;
    if (start > end) {
      toast.failure('Start time cannot be later than end time');
      return;
    }

    dispatch(
      operation === 'edit' ? updateTask(values) : addTask({ ...values, date })
    )
      .then(data => {
        if (data.error) {
          throw new Error(data.payload);
        }
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <Formik
      initialValues={task || emptyTask}
      validationSchema={taskFormSchema}
      onSubmit={(values, action) => {
        handleSubmit(values);
        action.resetForm();
      }}
    >
      <Form>
        <Label>
          Title
          <Input type="text" name="title" placeholder="Enter text" required />
        </Label>
        <FormGroup>
          <Label>
            Start
            <Input type="time" name="start" required />
          </Label>
          <Label>
            End
            <Input type="time" name="end" required />
          </Label>
        </FormGroup>

        <WrapRadio>
          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput type="radio" value="low" name="priority" />
              <RadioButtonCustom />
              Low
            </RadioButtonsLabel>
          </RadioContainer>

          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput type="radio" value="medium" name="priority" />
              <RadioButtonCustom />
              Medium
            </RadioButtonsLabel>
          </RadioContainer>

          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput type="radio" value="high" name="priority" />
              <RadioButtonCustom />
              High
            </RadioButtonsLabel>
          </RadioContainer>
        </WrapRadio>

        <WrapButton>
          {operation === 'edit' ? (
            <EditButton type="submit">
              <IconEditPen />
              Edit
            </EditButton>
          ) : (
            <EditButton type="submit">
              <IconPlus />
              Add
            </EditButton>
          )}

          <CancelButton type="button" onClick={handlerCloseModal}>
            Cancel
          </CancelButton>
        </WrapButton>
      </Form>
    </Formik>
  );
};

export default TaskForm;
