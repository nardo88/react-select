import { useState } from "react"
import styled from "styled-components"

interface Option {
    id: string
    title: string
}

interface SelectProps {
    options: Option[]
    value?: Option
    label?: string
    onChange: (value: Option) => void
}

const Select = ({options = [], value, onChange, label }:SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const changeSelect = (option:Option) => {
        onChange(option)
        setIsOpen(false)
    }
    return (
        <SelectWrapper>
            <SelectTop onClick={() => setIsOpen(!isOpen)}>
                {label && <Label>{label}</Label>}
                <SelectValue>{value?.title || ''}</SelectValue>
            </SelectTop>
            {
                isOpen &&
            <DropDown>
                <Ul>
                    {
                        options.map((item:Option) => 
                        <li 
                            key={item.id}
                            onClick={() => changeSelect(item)}
                        >
                            {item.title}
                        </li>)
                    }
                </Ul>
            </DropDown>
            }

        </SelectWrapper>
    )
}

export default Select

const SelectWrapper = styled.div`
    position: relative;
`
const SelectTop = styled.div`
    position: relative;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
`
const Label = styled.span`
    position: absolute;
    z-index: 10;
    background-color: #fff;
    color: gray;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
    left: 10px;
    top: 0;
    transform: translateY(-50%);
`
const SelectValue = styled.div``
const DropDown = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 110%;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.3);
    border-radius: 4px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 500px;
`
const Ul = styled.ul`
    list-style: none;
    li{
        cursor: pointer;
        padding: 8px 12px;
        transition: .3s;

        &:hover{
            background-color: gray;
        }
    }
`