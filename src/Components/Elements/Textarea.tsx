import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
  width: 330px;
`;
const LabelWrapper = styled.div`
  min-width: 130px;
`;
export const Textarea = ({ label }: { label: string }) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <label>{label}</label>
      </LabelWrapper>
      <div>
        <input aria-label={label} />
      </div>
    </Wrapper>
  );
};
