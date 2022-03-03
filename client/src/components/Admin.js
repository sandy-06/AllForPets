import React from "react";
import { useMutation } from '@apollo/client';
//import user;

import { ADD_Product } from "../../utils/mutations";
function adminPage () 
    //if user is admin allow to see page
    // it not state viewing not allowed

const addProduct = () => {
  // set initial form state
  const [productFormData, setProductFormData] = useState({
       name: '',
       image: '',
       description: '',
       price: '',
       quantity: ''
     });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addProduct, {error}] = useMutation(ADD_Product);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductFormData({ ...productFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
        const { data } = await addProduct({
            variables: { ...productFormData },
          });
          console.log(data);
          
        } catch (err) {
          console.error(err);
        }
    
        setProductFormData({
          name: '',
          image: '',
          description: '',
          price: '',
          quantity: ''
        });
      };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)}
         show={showAlert}
          variant='danger'>
          Something went wrong with your product!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='name'>name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Product name'
            name='name'
            onChange={handleInputChange}
            value={productFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>
              Name is required!
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='image'>Image</Form.Label>
          <Form.Control
            type='image'
            placeholder='Product image'
            name='image'
            onChange={handleInputChange}
            value={productFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>
              Image is required!
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='description'>Description</Form.Label>
          <Form.Control
            type='description'
            placeholder='Product description'
            name='description'
            onChange={handleInputChange}
            value={productFormData.description}
            required
          />
          <Form.Control.Feedback type='invalid'>
              Description is required!
              </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price</Form.Label>
          <Form.Control
            type='price'
            placeholder='Product price'
            name='price'
            onChange={handleInputChange}
            value={productFormData.price}
            required
          />
          <Form.Control.Feedback type='invalid'>
              Price is required!
              </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='quantity'>Quantity</Form.Label>
          <Form.Control
            type='quantity'
            placeholder='Product quantity'
            name='quantity'
            onChange={handleInputChange}
            value={productFormData.quantity}
            required
          />
          <Form.Control.Feedback type='invalid'>
              Quantity is required!
              </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(productFormData.name && productFormData.image && productFormData.description && productFormData.price && productFormData.quantity)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};




    export default Admin;
