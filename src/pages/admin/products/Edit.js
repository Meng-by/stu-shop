import React from "react"
import {Form,Card, Input, Button,message} from 'antd'
function Edit(props) {
    const { getFieldDecorator } = props.form;
    const priceValidate = (rule,value,callback)=>{
        if(value*1>100) {
            callback("价格不能大于100");
        } else{
            callback();
        }
    }
    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        //验证
        props.form.validateFieldsAndScroll((err,values)=>{
            if(!err) {
                console.log(values);
                console.log("提交");
                //此处调用api接口
            }else {
                message.error("请输入正确内容");
            }
        });
    };
    return (
        <Card title="商品编辑">
            <Form onSubmit={e=>handleSubmit(e)}>
                <Form.Item label="名字">
                    {getFieldDecorator("name",{
                        rules:[
                            {
                                required:true,
                                message:"请输入商品名字"
                            }]
                    })(<Input placeholder="请输入商品名字" />)}
                </Form.Item>

                <Form.Item label="价格">
                    {getFieldDecorator("price",{
                        rules:[ 
                            {
                                required:true,
                                message:"请输入商品价格"
                            },{
                                validator:priceValidate
                            }]
                    })(<Input placeholder="请输入商品价格" />)}
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
            </Form>

        </Card>
    );
} 

export default Form.create({name:"productEdit"})(Edit) ;