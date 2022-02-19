    // 在这个场景下，放弃这个做法，仅使用 component 的方式
    // const ref = this.viewContainerRef.createComponent(NzFormControlsComponent);
    // // ref.
    // const inst = ref.instance;
    // // inst.ngAfterViewInit = () => {
    // //   console.log(inst.formControls.map(it => `~~~${it.name}`));
    // // };
    // inst.afterViewInit.pipe(
    //   tap((controls: QueryList<FormControlDirective>) => {
    //     console.log(inst.formControls.map(it => `~~~${it.name}`));
    //
    //     // register template to registry
    //     controls.forEach(it => {
    //       this.widgetsRegistry.register(it.name, it.templateRef);
    //     })
    //   })
    // ).subscribe();
