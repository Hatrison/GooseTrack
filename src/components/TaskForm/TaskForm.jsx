import { useEffect, useRef, useState } from 'react';
import {
  WrapForm,
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
// import { addTask, updateTask } from 'redux/tasks/operations';
// import { useDispatch } from 'react-redux';

const emptyTask = {
  title: '',
  start: '00:00',
  end: '00:00',
  priority: 'low',
  category: 'in-progress',
};

const initialTask = {
  title: '',
  date: '2023-08-15',
  start: '09:00',
  end: '09:15',
  priority: 'low',
  category: 'to-do',
  statusOperation: 'create',
};

export const TaskForm = ({ initialData, handlerCloseModal }) => {
  const [informationTask, setInformationTask] = useState(emptyTask);
  const [operation, setOperation] = useState('create');
  const [dateSave, setDataSave] = useState(null);

  // Прибрати при фінальній версії, це мокові дані
  const initialDataTask = useRef(initialData);

  // const dispatch = useDispatch();
  const successful = true;
  const error = false;

  useEffect(() => {
    // Прибрати при фінальній версії
    initialDataTask.current = initialTask;
    // const { statusOperation, _id, ...information } = initialData;
    const { statusOperation, _id, ...information } = initialDataTask.current;
    if (_id) information.id = _id;
    setInformationTask(information);
    setOperation(statusOperation);
  }, [initialData]);

  useEffect(() => {
    if (!successful || !dateSave) return;

    handlerCloseModal();
  }, [dateSave, successful, handlerCloseModal]);

  useEffect(() => {
    if (!error || !dateSave) return;
    toast.failure(`Data save error`);
  }, [error, dateSave]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInformationTask(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (informationTask.start > informationTask.end) {
      toast.failure('Start time cannot be later than end time');
      return;
    }

    // if (operation === 'edit') {
    //   dispatch(updateTask(informationTask));
    // } else {
    //   dispatch(addTask(informationTask));
    // }
    setDataSave(Date.now());
  };

  return (
    <WrapForm>
      <Form onSubmit={handleSubmit}>
        <Label>
          Title
          <Input
            type="text"
            placeholder="Enter text"
            name="title"
            value={informationTask.title}
            onChange={handleChange}
            required
          />
        </Label>
        <FormGroup>
          <Label>
            Start
            <Input
              id="time"
              type="time"
              name="start"
              value={informationTask.start}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            End
            <Input
              type="time"
              name="end"
              value={informationTask.end}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>

        <WrapRadio>
          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput
                type="radio"
                value="low"
                name="priority"
                checked={informationTask.priority === 'low'}
                onChange={handleChange}
              />
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
                checked={informationTask.priority === 'medium'}
                onChange={handleChange}
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
                checked={informationTask.priority === 'high'}
                onChange={handleChange}
              />
              <RadioButtonCustom />
              High
            </RadioButtonsLabel>
          </RadioContainer>
        </WrapRadio>

        {/* must be replaced with initialData.id */}
        {operation === 'edit' ? (
          <EditButton type="submit">
            <IconEditPen />
            Edit
          </EditButton>
        ) : (
          <WrapButton>
            <EditButton type="submit">
              <IconPlus />
              Add
            </EditButton>

            <CancelButton type="button" onClick={handlerCloseModal}>
              Cancel
            </CancelButton>
          </WrapButton>
        )}
      </Form>
    </WrapForm>
  );
};

export default TaskForm;
