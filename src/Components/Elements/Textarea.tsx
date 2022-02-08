import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
`;
const LabelWrapper = styled.div`
  min-width: 130px;
`;
export const Textarea = ({ label }: any) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <label>{label}</label>
      </LabelWrapper>
      <div>
        <textarea/>
      </div>
    </Wrapper>
  );
};
