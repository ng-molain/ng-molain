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
          name: '颜色文件',
          ui: {
            controlType: 'upload'
          }
        },
        image1: {
          type: 'string',
          name: '颜色图片',
          ui: {
            controlType: 'image'
          }
        },
        fontStyle1: {
          type: 'string', // 实际是一个object
          name: '颜色图片',
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
        {type: 'control', $ref: 'qType', controlType: 'select'},
        {type: 'control', $ref: 'qIsSwitch', controlType: 'switch'},
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
            {type: 'control', $ref: 'qIsSwitch', controlType: 'switch'},
          ]
        }
      ]
    }
  ]
}
