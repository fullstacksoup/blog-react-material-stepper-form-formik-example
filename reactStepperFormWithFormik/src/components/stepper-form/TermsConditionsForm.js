import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
export default function TermsConditionsForm(props) {

    const [isTermChecked, setIsTermChecked] = useState(false);

    const handleChange = event => {
        
        const val = event.target.checked;                        
        setIsTermChecked(val)        
        props.handleIsTermChecked(val);
    }
    return (

        <div >
            
            <Box component="div" m={8} align="left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
            </Box>          
            {(props.formik.touched.isTermChecked && Boolean(props.formik.errors.isTermChecked))?
                <Alert severity="error">Please agree to the Terms & Conditions </Alert>
            :
                ''
            }
            <Typography variant="h6" align="center">
                Terms & Conditions   
                 <Checkbox 
                          checked={props.isTermChecked}
                          onChange={handleChange}
                          onBlur={props.formik.handleBlur}                            
                          inputProps={{ 'aria-label': 'primary checkbox' }} />  
            </Typography>
        </div>
    )
}
