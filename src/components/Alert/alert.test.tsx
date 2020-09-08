import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { AlertProps } from './alert';

const testProps: AlertProps = {
    type: 'success',
    closeText: 'X',
    closable: false
}

describe('test Alert Component', () => {
    if ('should render success alert') {
        const wrapper = render(<Alert 
            type="success"
            message="Success Text"
            description="Detailed description and advice about successful copywriting."
            closable
          />
        )
        const element = wrapper.getByText('Success Text');
        expect(element).toHaveClass('alert alert-sucess');
        fireEvent.click(element)
        // expect(defaultProps.onClick).toHaveBeenCalled()
    }
})