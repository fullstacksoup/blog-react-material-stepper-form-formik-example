import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import AttachFile from '@material-ui/icons/PhotoCamera';
import styles from 'styles/UploadFileForm.module.css';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

export default function AddImageForm(props) {
        
    return (
        <React.Fragment>
            <Container maxWidth="sm">
            <FormControl component="fieldset" className={styles.formControl}>
               {(props.formik.touched.hasImagesToUpload && Boolean(props.formik.errors.hasImagesToUpload)) ?               
                <>
                    <FormLabel component="legend" style={{color: 'red'}}>Do you have any images? (Required)</FormLabel>                                        
                </>               
               :
                <>
                    <FormLabel component="legend" color="error">Do you have any images?</FormLabel>                    
                </>
               }

                <RadioGroup row aria-label="position" 
                            name="hasImagesToUpload"
                            onChange={props.formik.handleChange}
                            onBlur={props.formik.handleBlur}
                            value={props.formik.values.hasImagesToUpload}
                            error={props.formik.touched.hasImagesToUpload && Boolean(props.formik.errors.hasImagesToUpload)}
                            helperText={props.formik.touched.hasImagesToUpload && props.formik.errors.hasImagesToUpload}         
                            >
                    <FormControlLabel
                        value="Yes"
                        control={<Radio color="primary" />}
                        label="Yes"
                        labelPlacement="start"                        
                    />
                    <FormControlLabel
                        value="No"
                        control={<Radio color="primary" />}
                        label="No"
                        labelPlacement="start"
                    />                    
                </RadioGroup>
                
            </FormControl>       
            {(props.formik.touched.filesCount && Boolean(props.formik.errors.filesCount) && props.files.length === 0)?
            <Alert severity="error">Please upload 1 to 3 images</Alert>
            :
            ''
            }
             {props.formik.values.hasImagesToUpload == "Yes"?
                <DropzoneArea   filesLimit={3} 
                                //onChange={props.formik.handleChange}
                                previewText="Selected files"
                                // useChipsForPreview
                                onChange={props.handleDropzoneChange }                                
                                // values={props.files}
                                initialFiles={props.files}
                                // initialFiles={props.formik.values.files}
                                Icon={AttachFile}                                
                                acceptedFiles={['image/*']}
                                showAlerts={['error']}                                 
                                dropzoneText="Click here to upload photo"
                                dropzoneClass={styles.dropZoneCls} />
                : ''}
            </Container>
        </React.Fragment>
    )
}
