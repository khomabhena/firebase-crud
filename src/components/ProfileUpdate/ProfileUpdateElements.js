import styled from "styled-components";

export const ProfileUpdateContainer = styled.div`
    display: ${({ selectedProfile }) => (selectedProfile === 'update' ? 'flex' : 'none')};
    flex-direction: column;
    padding: 1rem 2rem;
`

export const Title = styled.h3`
    color: var(--grey);
    margin-top: 2rem;
`

export const SubTitle = styled.h4``

export const ImageWrap = styled.div`
    margin-top: 1rem;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--greyLight);
    align-self: center;
`

export const Image = styled.img`
    width: 120px;
    height: 120px;
`

export const ImageIcon = styled.img``

export const UpdateForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 912px) {
        flex-direction: column;
    }
`

export const Inputwrap = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;
`

export const InputLabel = styled.label`
    margin-top: 2rem;
    color: var(--grey);
`

export const Input = styled.input`
    padding: 0.5rem 2rem;
    margin-top: 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--greyLight);
    margin-right: 1rem;
    color: var(--greyDark);
    font-size: 1rem;

    :focus {
        outline: none;
        border: 1px solid var(--primary);
    }

    ::placeholder {
        color: var(--greyLight);
        font-size: ${({ smallHint }) => (smallHint ? '0.8rem' : '1rem')};
    }
`

export const TextArea = styled.textarea`
    padding: 0.5rem 2rem;
    border-radius: 4px;
    border: 1px solid var(--greyLight);
    font-size: 1rem;
    
    :focus {
        outline: none;
        border: 1px solid var(--primary);
    }

    ::placeholder {
        color: var(--greyLight);
    }
`

export const FileChooser = styled.input`
    border: 1px solid var(--greyLight);
    border-radius: 4px;
    padding: 1rem 1rem;

    :first-line {
        font-size: 1rem;
        color: var(--grey);
    }

    ::file-selector-button {
        color: var(--grey);
        padding: 0.5rem 1rem;
        border: 1px solid var(--greyLight);
        border-radius: 4px;
    }

`

export const ButtonWrap = styled.div`
    align-self: flex-end;
    margin: 2rem 1rem;
`

export const UpdateButton = styled.button`
    padding: 0.9rem 3rem;
    border-radius: 4px;
    border: none;
    background: var(--primary);
    color: var(--primaryWhite);
    font-weight: bold;
` 