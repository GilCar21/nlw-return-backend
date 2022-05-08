import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpay = jest.fn();

const submitFeeback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpay}
)

describe('Submit feedback', ()=>{
    it('should be able to submit a feedback',async ()=>{
        
        await expect(submitFeeback.execute({
            type: 'BUG',
            comment: 'example commet',
            screenshot: 'data:image/png;base64.daf566',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpay).toHaveBeenCalled();
    })

    it('should be able to submit a feedback without type',async ()=>{
        
        await expect(submitFeeback.execute({
            type: '',
            comment: 'example commet',
            screenshot: 'data:image/png;base64.daf566',
        })).rejects.toThrow();
    })

    it('should be able to submit a feedback without comment',async ()=>{
        
        await expect(submitFeeback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64.daf566',
        })).rejects.toThrow();
    })

    it('should be able to submit a feedback without screenshot',async ()=>{
        
        await expect(submitFeeback.execute({
            type: 'BUG',
            comment: 'example commet',
            screenshot: 'test.png',
        })).rejects.toThrow();
    })
})