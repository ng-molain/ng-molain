import {FormSchema, FormUISchema} from "@ng-molain/forms";

export const formSchema: FormSchema = {
  type: 'object',
  properties: {
    qType: {
      type: 'string',
      name: '下拉选择',
      enum: ['选项一', '选项二'],
      ui: {
        controlType: 'select'
      }
    },
    qIsSwitch: {
      type: 'boolean',
      name: '是否开关',
      ui: {
        controlType: 'switch'
      }
    },
    qObject: {
      type: 'object',
      name: '对象配置项',
      properties: {
        switch1: {
          type: 'boolean',
          name: '是否开关',
          ui: {
            controlType: 'switch'
          }
        },
        color1: {
          type: 'string',
          name: '颜色选择',
          ui: {
            controlType: 'colorPicker'
          }
        },
        file1: {
          type: 'string',
          name: '选择文件',
          ui: {
            controlType: 'upload'
          }
        },
        image1: {
          type: 'string',
          name: '选择图片',
          ui: {
            controlType: 'image'
          }
        },
        fontStyle1: {
          type: 'string', // 实际是一个object
          name: '字体样式',
          ui: {
            controlType: 'fontStyle'
          },
          // properties: []
        }
      },
      ui: {
        enableSwitch: true
      }
    }
  },
  rules: []
};

export const uiSchema: FormUISchema = {
  type: 'vertical-layout',
  elements: [
    {
      type: 'group-layout',
      options: {
        name: 'GroupA'
      },
      elements: [
        {type: 'control', $ref: 'qType', controlType: 'limitInDuration'},
        {type: 'control', $ref: 'qIsSwitch', controlType: 'password', options: {itemStyleClass: 'bg-gray-100', secondary: true}},
      ]
    },
    {
      type: 'group-layout',
      options: {
        name: 'GroupB',
      },
      elements: [
        {type: "object", $ref: 'qObject',       elements: [
            {type: 'control', $ref: 'qType', controlType: 'select'},
            {type: 'control', $ref: 'qIsSwitch', controlType: 'switch'},
          ]}
      ]
    },
    {
      type: 'group-layout',
      options: {
        name: 'GroupC',
      },
      elements: [
        {
          type: 'group-layout',
          options: {
            name: 'GroupC-1',
          },
          elements: [
            {type: 'control', $ref: 'qType', controlType: 'select'},
            {type: 'control', $ref: 'qIsSwitch', controlType: 'switch'},
          ]
        },
        {
          type: 'group-layout',
          options: {
            name: 'GroupC-2',
          },
          elements: [
            {type: 'control', $ref: 'qType', controlType: 'select'},
            {type: 'control', $ref: 'qIsSwitch', controlType: 'switch', options: {
              // tip: {text: null, link: 'https://parim.net/', linkText: '查看帮助'},
              // tip: {text: "一些帮助说明个"},
              tip: {text: "一些帮助说明个", link: 'https://parim.net/', linkText: '查看帮助'},
                extra: "这是一些说明包含一个 <a href='https://parim.net target='_blank'>链接</a>"
              }},
            {type: 'control', $ref: 'qObject.file1', controlType: 'custom', options: {
              extra: "这是一些说明包含一个 <a href='https://parim.net target='_blank'>链接</a>"
              }},
          ]
        }
      ]
    }
  ]
}
