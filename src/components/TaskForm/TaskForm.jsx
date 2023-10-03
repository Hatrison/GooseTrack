import { useEffect, useState } from 'react';
import {
  Form,
  InputWrap,
  FieldWrap,
  EditButton,
  FormGroup,
  Input,
  Label,
  StartWrap,
  EndWrap,
  ErrorTag,
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
import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useDispatch';
import { taskFormSchema } from './taskFormSchema';

const emptyTask = {
  title: '',
  start: '00:00',
  end: '00:00',
  priority: 'low',
};

export const TaskForm = ({ category = 'to-do', task, handlerCloseModal }) => {
  const [operation, setOperation] = useState('create');
  const date = useAppSelector(selectDate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (task?._id) setOperation('edit');
  }, [task]);

  const handleSubmit = async values => {
    const { start, end } = values;
    if (start > end) {
      toast.failure('Start time cannot be later than end time');
      return;
    }

    dispatch(
      operation === 'edit'
        ? updateTask(values)
        : addTask({ ...values, date, category })
    )
      .then(data => {
        if (data.error) {
          throw new Error(data.payload);
        }
        handlerCloseModal();
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
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <InputWrap>
            <FieldWrap>
              <div>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter text"
                  required
                />
              </div>

              <FormGroup>
                <StartWrap>
                  <Label>Start</Label>
                  <Input type="time" name="start" required />
                </StartWrap>
                <EndWrap>
                  <Label>End</Label>
                  <Input type="time" name="end" required />
                </EndWrap>
              </FormGroup>
              {touched.start && touched.end && (errors.start || errors.end) && (
                <ErrorTag>
                  Start time must be before or equal to end time
                </ErrorTag>
              )}
            </FieldWrap>

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
                  <RadioButtonsInput
                    type="radio"
                    value="medium"
                    name="priority"
                  />
                  <RadioButtonCustom />
                  Medium
                </RadioButtonsLabel>
              </RadioContainer>

              <RadioContainer>
                <RadioButtonsLabel>
                  <RadioButtonsInput
                    type="radio"
                    value="high"
                    name="priority"
                  />
                  <RadioButtonCustom />
                  High
                </RadioButtonsLabel>
              </RadioContainer>
            </WrapRadio>
          </InputWrap>

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
      )}
    </Formik>
  );
};

export default TaskForm;
