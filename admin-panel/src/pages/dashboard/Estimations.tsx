import React, { useState } from 'react'
// import { Plus, Minus } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, Input } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type Item = {
  id: string
  title: string
  description: string
  unit: string
  quantity: number
  price: number
  margin: number
}

type Section = {
  id: string
  title: string
  items: Item[]
}

export function Estimations() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      title: 'Electric',
      items: [
        { id: '1', title: 'Electric', description: 'Item Description', unit: 'QTY', quantity: 100, price: 0, margin: 0 },
        { id: '2', title: 'Laptop', description: 'Item Description', unit: 'QTY', quantity: 100, price: 0, margin: 0 },
        { id: '3', title: 'Meter', description: 'Item Description', unit: 'Meter', quantity: 300, price: 0, margin: 0 },
        { id: '4', title: 'Electric Tools', description: 'Item Description', unit: 'Box', quantity: 10, price: 0, margin: 10 },
      ]
    },
    {
      id: '2',
      title: 'Cotton T',
      items: [
        { id: '5', title: 'Red Color', description: 'Item Description', unit: 'QTY', quantity: 2000, price: 0, margin: 5 },
        { id: '6', title: 'Blue Color', description: 'Item Description', unit: 'QTY', quantity: 10, price: 0, margin: 5 },
        { id: '7', title: 'Yellow Color', description: 'Item Description', unit: 'QTY', quantity: 8, price: 0, margin: 5 },
      ]
    }
  ])

  const calculateItemTotal = (item: Item) => {
    const baseTotal = item.quantity * item.price
    const marginAmount = baseTotal * (item.margin / 100)
    return baseTotal + marginAmount
  }

  const calculateSectionTotal = (section: Section) => {
    return section.items.reduce((total, item) => total + calculateItemTotal(item), 0)
  }

  const calculateSubTotal = () => {
    return sections.reduce((total, section) => total + calculateSectionTotal(section), 0)
  }

  const calculateTotalMargin = () => {
    return sections.reduce((total, section) => {
      return total + section.items.reduce((sectionTotal, item) => {
        return sectionTotal + (item.quantity * item.price * (item.margin / 100))
      }, 0)
    }, 0)
  }

  const handleItemChange = (sectionId: string, itemId: string, field: keyof Item, value: string | number) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
            ...section,
            items: section.items.map(item =>
              item.id === itemId
                ? { ...item, [field]: typeof value === 'string' && field !== 'title' && field !== 'description' && field !== 'unit' ? parseFloat(value) || 0 : value }
                : item
            )
          }
          : section
      )
    )
  }

  const addItem = (sectionId: string) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
            ...section,
            items: [
              ...section.items,
              { id: Date.now().toString(), title: 'New Item', description: '', unit: '', quantity: 0, price: 0, margin: 0 }
            ]
          }
          : section
      )
    )
  }

  const removeItem = (sectionId: string, itemId: string) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
            ...section,
            items: section.items.filter(item => item.id !== itemId)
          }
          : section
      )
    )
  }

  const addSection = () => {
    setSections(prevSections => [
      ...prevSections,
      { id: Date.now().toString(), title: 'New Section', items: [] }
    ])
  }

  const removeSection = (sectionId: string) => {
    setSections(prevSections => prevSections.filter(section => section.id !== sectionId))
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' sx={{ mb: '30px' }}>Edit Estimates</Typography>

      {sections.map(section => (
        <Grid key={section.id}>
          <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Typography variant='h5'>{section.title}</Typography>
            <Button variant="contained" color='error' onClick={() => removeSection(section.id)}>
              <DeleteForeverIcon />
            </Button>
          </Grid>
          <Paper sx={{ p: 3, mt: 2, mb: 3 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <strong>Section Total: ${calculateSectionTotal(section).toFixed(2)}</strong>
            </Grid>
            {!!section.items.length && <table>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>DESCRIPTION</th>
                  <th>UNIT</th>
                  <th>QUANTITY</th>
                  <th>PRICE ($)</th>
                  <th>MARGIN (%)</th>
                  <th>TOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {section.items.map(item => (
                  <tr key={item.id}>
                    <td>
                      <Input
                        value={item.title}
                        onChange={(e) => handleItemChange(section.id, item.id, 'title', e.target.value)}
                      />
                    </td>
                    <td>
                      <Input
                        value={item.description}
                        onChange={(e) => handleItemChange(section.id, item.id, 'description', e.target.value)}
                      />
                    </td>
                    <td>
                      <Input
                        value={item.unit}
                        onChange={(e) => handleItemChange(section.id, item.id, 'unit', e.target.value)}
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(section.id, item.id, 'quantity', e.target.value)}
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={item.price}
                        onChange={(e) => handleItemChange(section.id, item.id, 'price', e.target.value)}
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={item.margin}
                        onChange={(e) => handleItemChange(section.id, item.id, 'margin', e.target.value)}
                      />
                    </td>
                    <td>{calculateItemTotal(item).toFixed(2)}</td>
                    <td>
                      <Button variant="outlined" color='error' onClick={() => removeItem(section.id, item.id)}>
                        <RemoveIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
            <Button onClick={() => addItem(section.id)}>
              <AddIcon /> Add Item
            </Button>
          </Paper>
        </Grid>
      ))}
      <Button onClick={addSection}>
        <AddIcon /> Add Section
      </Button>
      <Grid sx={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Grid sx={{display: 'flex', gap: '5px', flexDirection: 'column'}}>
          <Paper sx={{p: '5px 20px', color: 'gray'}}>Sub Total: ${calculateSubTotal().toFixed(2)}</Paper>
          <Paper sx={{p: '5px 20px', color: 'gray'}}>Total Margin: ${calculateTotalMargin().toFixed(2)}</Paper>
          <Paper sx={{p: '5px 20px'}}><strong>Total Amount: ${(calculateSubTotal() + calculateTotalMargin()).toFixed(2)}</strong></Paper>
        </Grid>
      </Grid>
    </Box>
  )
}