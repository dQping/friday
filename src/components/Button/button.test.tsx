import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonSize, ButtonType, IButtonProps } from './button';

const defaultProps = {
    onClick: jest.fn()
}

const testProps: IButtonProps = {
    size: ButtonSize.Large,
    btnType: ButtonType.Danger,
    className: 'custom'
}

const disableProps: IButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test Button component', () => {
    test('Should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Fridy Default Button</Button>);
        const element = wrapper.getByText('Fridy Default Button') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        // tagName is spell with Capital letters
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-sm btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
    test('Should render the correct button base on different props', () => {
        const wrapper = render(<Button {...testProps}>Fridy Custom Button</Button>);
        const element = wrapper.getByText('Fridy Custom Button');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn btn-lg btn-danger custom');
    })
    test('Should render disabled button when the disabled set to true', () => {
        const wrapper = render(<Button {...disableProps}>Fridy Disabled Button</Button>);
        const element = wrapper.getByText('Fridy Disabled Button') as HTMLButtonElement;
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disableProps.onClick).not.toHaveBeenCalled();
    })
})