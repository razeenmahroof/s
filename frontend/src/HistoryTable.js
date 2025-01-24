import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem, FormControl, InputLabel, Box, CircularProgress } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import api from './api';

// Styled components
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
}));

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.common.black,
}));

const StatusBox = styled(Box)(({ theme, status }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.875rem',
  backgroundColor: status === 'completed' ? theme.palette.success.light : theme.palette.warning.light,
  color: status === 'completed' ? theme.palette.success.contrastText : theme.palette.warning.contrastText,
}));

const LoaderContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', // Adjust as needed
  });

const HistoryTable = ({ data,  isLoading }) => {
  const [selectedRecords, setSelectedRecords] = useState({});
  

  useEffect(() => {
    console.log(data)
    const initialSelectedRecords = {};
    data.forEach(job => {
      initialSelectedRecords[job.job_id] = 'all';
    });
    setSelectedRecords(initialSelectedRecords);
  }, [data]);

  const handleRecordChange = (job_id, value) => {
    setSelectedRecords(prev => ({ ...prev, [job_id]: value }));
  };

  const onDownloadSingle = async (selectedRecord, job) => {
    try {
      const response = await api.get(`/file-download?unique_folder=${job.unique_folder}&folder_name=data${selectedRecord}`);
      const { download_url } = response.data;
    
      const link = document.createElement('a');
      link.href = download_url;
      link.setAttribute('download', `output${selectedRecord + 1}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
    } catch (error) {
      console.error('Error downloading selected output:', error);
    }
  };

  const onDownload = async(job) => {
    try {
      const response = await api.get(`/download?unique_folder=${job.unique_folder}`);
      console.log(response)
      if (response.status !== 200) {
        throw new Error('Failed to get the pre-signed URL.');
      }
  
      const { download_url } = response.data;
      console.log('Received Pre-Signed URL:', download_url);
  
      const link = document.createElement('a');
      link.href = download_url;
      link.setAttribute('download', 'outputs.zip');
      document.body.appendChild(link);
      link.click();
      link.remove();
        
    } catch (error) {
      console.error('Error downloading selected output:', error);
    }
  }

  const handleDownload = (job) => {
    const selectedRecord = selectedRecords[job.job_id];
    if (selectedRecord === 'all') {
      onDownload(job);
    } else {
      onDownloadSingle(selectedRecord, job);
    }
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );
  }

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <StyledTableHead>
          <TableRow>
            <StyledHeaderCell>Job ID</StyledHeaderCell>
            <StyledHeaderCell>Status</StyledHeaderCell>
            <StyledHeaderCell>Created At</StyledHeaderCell>
            <StyledHeaderCell>Record Selection</StyledHeaderCell>
            <StyledHeaderCell>Action</StyledHeaderCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((job) => (
            <TableRow key={job.job_id}>
              <TableCell>{job.job_id}</TableCell>
              <TableCell>
                <StatusBox status={job.status}>
                  {job.status === 'completed' ? (
                    <CheckCircleIcon fontSize="small" style={{ marginRight: '4px' }} />
                  ) : (
                    <AccessTimeIcon fontSize="small" style={{ marginRight: '4px' }} />
                  )}
                  {job.status}
                </StatusBox>
              </TableCell>
              <TableCell>{moment(job.created_at).format('lll')}</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel style={{margin:'-6px'}}>Select Record</InputLabel>
                  <Select
                    value={selectedRecords[job.job_id] || 'all'}
                    onChange={(e) => handleRecordChange(job.job_id, e.target.value)}
                  >
                    <MenuItem  value="all">Select All</MenuItem>
                    {[...Array(job.totalRecords)].map((_, index) => (
                      <MenuItem key={`${job.job_id}-${index}`} value={index + 1}>Record {index + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <Button
                style={{fontSize: "12px", minWidth: "10em", backgroundColor: "#fff", border: "1px solid #0097ab", color: "#0097ab"}}
                //   startIcon={<CloudDownloadIcon />}
                  onClick={() => handleDownload(job)}
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default HistoryTable;