import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import styles from 'styles/EventForm.module.css';

export default function EventForm(props) {   
    const CHARACTER_LIMIT = 200;
    return (
        < >
            <Container maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField placeholder=""                                     
                                    label="Event Title"      
                                    fullWidth={true}                                                                                        
                                    variant="outlined"
                                    size="small"           
                                    type="text"     
                                    name="title"
                                    className={styles.textField}
                                    onChange={props.formik.handleChange}
                                    onBlur={props.formik.handleBlur}
                                    value={props.formik.values.title}
                                    error={props.formik.touched.title && Boolean(props.formik.errors.title)}
                                    helperText={props.formik.touched.title && props.formik.errors.title}         
            
                                />
                </Grid>

                <Grid item xs={12} >

                    <TextField label="Event Details"                                         
                                        variant="outlined"
                                        fullWidth={true}
                                        size="small"
                                        type="text"    
                                        name="description"
                                        multiline
                                        minRows={4}
                                        className={styles.textField}
                                        onChange={props.formik.handleChange}
                                        onBlur={props.formik.handleBlur}
                                        value={props.formik.values.description}
                                        error={props.formik.touched.description && Boolean(props.formik.errors.description)}
                                        helperText={!(props.formik.touched.description && Boolean(props.formik.errors.description)) ? `${props.formik.values.description.length}/${CHARACTER_LIMIT}` :  `${props.formik.values.description.length}/${CHARACTER_LIMIT} ${props.formik.errors.description}`}                                             
                                 />
                    
                </Grid>

                <Grid sm={5}>                        
                   
                    <TextField label="Start Date"
                                variant="outlined"
                                size="small"
                                name="startDate"
                                id="startDate"                                
                                type="date"
                                style={{marginTop: '17px', marginLeft: '12px'}}
                                defaultValue={props.formik.values.startDate}                        
                                onChange={props.formik.handleChange}
                                onBlur={props.formik.handleBlur}
                                value={props.formik.values.startDate}
                                error={props.formik.touched.startDate && Boolean(props.formik.errors.startDate)}
                                helperText={props.formik.touched.startDate && props.formik.errors.startDate}                                   
                                
                                InputLabelProps={{
                                    shrink: true,
                                }}
                    />
                
                </Grid>
                <Grid sm={2}></Grid>                        
                <Grid sm={5} align="right">
                    <TextField label="End Date"
                                variant="outlined"
                                size="small"
                                name="endDate"
                                id="endDate"                                
                                type="date"
                                style={{marginTop: '17px', marginRight: '12px'}}
                                defaultValue={props.formik.values.endDate}                        
                                onChange={props.formik.handleChange}
                                onBlur={props.formik.handleBlur}
                                value={props.formik.values.endDate}
                                error={props.formik.touched.endDate && Boolean(props.formik.errors.endDate)}
                                helperText={props.formik.touched.endDate && props.formik.errors.endDate}   
                                
                                InputLabelProps={{
                                    shrink: true,
                                }}
                    />      

                </Grid>
            </Grid>
        </Container>
            
        </>
    )
}
