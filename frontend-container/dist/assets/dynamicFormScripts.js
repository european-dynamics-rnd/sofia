var formDynamicScripts = {};

function registerFormDynamicScript(id, form) {
  formDynamicScripts[id] = newFormDynamicScript(id);
  formDynamicScripts[id].formRef = form;
}

function nativeButtonClickHandler(id, fieldCode) {
  formDynamicScripts[id].nativeButtonClickHandler(fieldCode);
}

function nativeFieldEventsHandler(id, entityCode, fieldName, eventtype, eventData) {
  if (typeof formDynamicScripts[id].nativeFieldEventsHandler == "function")
    formDynamicScripts[id].nativeFieldEventsHandler(entityCode, fieldName, eventtype, eventData);
}

function nativeTableButtonClickHandler(id, entityCode, fieldCode, eventtype, event,
                                       formControlTable, dataLine) {
  if (typeof formDynamicScripts[id].nativeTableButtonClickHandler == "function")
    formDynamicScripts[id].nativeTableButtonClickHandler(entityCode, fieldCode, eventtype, event, formControlTable, dataLine);
}

function nativeTableButtonNewLineHandler(id, formControlTable, added) {
  if (typeof formDynamicScripts[id].nativeTableButtonNewLineHandler == "function") {
    formDynamicScripts[id].nativeTableButtonNewLineHandler(formControlTable, added);
  }
}

function nativeTableFieldEventsHandler(id, entityCode, fieldName, eventtype, eventData, formControlTable, dataLine) {
  if (typeof formDynamicScripts[id].nativeTableFieldEventsHandler == "function")
    formDynamicScripts[id].nativeTableFieldEventsHandler(entityCode, fieldName, eventtype, eventData, formControlTable, dataLine);
}

function defineSetFieldEditable(id, setFieldEditable) {
  if (typeof formDynamicScripts[id].defineSetFieldEditable == "function")
    formDynamicScripts[id].defineSetFieldEditable(setFieldEditable);
}

function defineGetFromBackend(id, getFromBackend) {
  if (typeof formDynamicScripts[id].defineGetFromBackend == "function")
    formDynamicScripts[id].defineGetFromBackend(getFromBackend);
}

function defineGetFromUrl(id, getFromUrl) {
  if (typeof formDynamicScripts[id].defineGetFromUrl == "function")
    formDynamicScripts[id].defineGetFromUrl(getFromUrl);
}

function definePostToBackend(id, postToBackend) {
  if (typeof formDynamicScripts[id].definePostToBackend == "function")
    formDynamicScripts[id].definePostToBackend(postToBackend);
}

function definePostToUrl(id, postToUrl) {
  if (typeof formDynamicScripts[id].definePostToUrl == "function")
    formDynamicScripts[id].definePostToUrl(postToUrl);
}

function definePutToBackend(id, putToBackend) {
  if (typeof formDynamicScripts[id].definePutToBackend == "function")
    formDynamicScripts[id].definePutToBackend(putToBackend);
}

function definePutToUrl(id, putToUrl) {
  if (typeof formDynamicScripts[id].definePutToUrl == "function")
    formDynamicScripts[id].definePutToUrl(putToUrl);
}

function defineDeleteFromBackend(id, deleteFromBackend) {
  if (typeof formDynamicScripts[id].defineDeleteFromBackend == "function")
    formDynamicScripts[id].defineDeleteFromBackend(deleteFromBackend);
}

function defineDeleteFromUrl(id, deleteFromUrl) {
  if (typeof formDynamicScripts[id].defineDeleteFromUrl == "function")
    formDynamicScripts[id].defineDeleteFromUrl(deleteFromUrl);
}


function defineAppendLineToTable(id, appendLineToTable) {
  if (typeof formDynamicScripts[id].defineAppendLineToTable == "function")
    formDynamicScripts[id].defineAppendLineToTable(appendLineToTable);
}

function defineClearTableLines(id, clearTableLines) {
  if (typeof formDynamicScripts[id].defineClearTableLines == "function")
    formDynamicScripts[id].defineClearTableLines(clearTableLines);
}

function defineAppendLineToComponent(id, appendLineToComponent) {
  if (typeof formDynamicScripts[id].defineAppendLineToComponent == "function")
    formDynamicScripts[id].defineAppendLineToComponent(appendLineToComponent);
}

function defineGetFormDataset(id, getFormDataset) {
  if (typeof formDynamicScripts[id].defineGetFormDataset == "function")
    formDynamicScripts[id].defineGetFormDataset(getFormDataset);
}

function defineSetFormTitle(id, setFormTitle) {
  if (typeof formDynamicScripts[id].defineSetFormTitle == "function")
    formDynamicScripts[id].defineSetFormTitle(setFormTitle);
}

function defineSetFormDescription(id, setFormDescription) {
  if (typeof formDynamicScripts[id].defineSetFormDescription == "function")
    formDynamicScripts[id].defineSetFormDescription(setFormDescription);
}

function defineSetAreaTitle(id, setAreaTitle) {
  if (typeof formDynamicScripts[id].defineSetAreaTitle == "function")
    formDynamicScripts[id].defineSetAreaTitle(setAreaTitle);
}

function defineSetAreaDescription(id, setAreaDescription) {
  if (typeof formDynamicScripts[id].defineSetAreaDescription == "function")
    formDynamicScripts[id].defineSetAreaDescription(setAreaDescription);
}

function defineSetAreaClass(id, setAreaClass) {
  if (typeof formDynamicScripts[id].defineSetAreaClass == "function")
    formDynamicScripts[id].defineSetAreaClass(setAreaClass);
}

function defineGetArea(id, getArea) {
  if (typeof formDynamicScripts[id].defineGetArea == "function")
    formDynamicScripts[id].defineGetArea(getArea);
}

function defineSetHeaderTabEditable(id, setHeaderTabEditable) {
  if (typeof formDynamicScripts[id].defineSetHeaderTabEditable == "function")
    formDynamicScripts[id].defineSetHeaderTabEditable(setHeaderTabEditable);
}

function defineSetActionButtonEditable(id, setActionButtonEditable) {
  if (typeof formDynamicScripts[id].defineSetActionButtonEditable == "function")
    formDynamicScripts[id].defineSetActionButtonEditable(setActionButtonEditable);
}

function defineSaveFormData(id, saveFormData) {
  if (typeof formDynamicScripts[id].defineSaveFormData == "function")
    formDynamicScripts[id].defineSaveFormData(saveFormData);
}

function defineSaveAndBackFormData(id, saveAndBackFormData) {
  if (typeof formDynamicScripts[id].defineSaveAndBackFormData == "function")
    formDynamicScripts[id].defineSaveAndBackFormData(saveAndBackFormData);
}

function defineDeleteFormData(id, deleteFormData) {
  if (typeof formDynamicScripts[id].defineDeleteFormData == "function")
    formDynamicScripts[id].defineDeleteFormData(deleteFormData);
}

function defineGetParams(id, getParams) {
  if (typeof formDynamicScripts[id].defineGetParams == "function")
    formDynamicScripts[id].defineGetParams(getParams);
}

function defineSelectedTabNumberFunction(id, setSelectedTabNumber) {
  if (typeof formDynamicScripts[id].defineSelectedTabNumberFunction == "function")
    formDynamicScripts[id].defineSelectedTabNumberFunction(setSelectedTabNumber);
}

function defineSelectedTextInputDialog(id, textInputDialog) {
  if (typeof formDynamicScripts[id].defineSelectedTextInputDialog == "function")
    formDynamicScripts[id].defineSelectedTextInputDialog(textInputDialog);
}

function defineSelectedTextDialog(id, textDialog) {
  if (typeof formDynamicScripts[id].defineSelectedTextDialog == "function")
    formDynamicScripts[id].defineSelectedTextDialog(textDialog);
}

function defineNotificationDialog(id, notificationDialog) {
  if (typeof formDynamicScripts[id].defineNotificationDialog == "function")
    formDynamicScripts[id].defineNotificationDialog(notificationDialog);
}

function defineSelectedOpenPopupDialog(id, openPopup) {
  if (typeof formDynamicScripts[id].defineSelectedOpenPopupDialog == "function")
    formDynamicScripts[id].defineSelectedOpenPopupDialog(openPopup);
}

function defineSelectedClosePopupDialog(id, closePopup) {
  if (typeof formDynamicScripts[id].defineSelectedClosePopupDialog == "function")
    formDynamicScripts[id].defineSelectedClosePopupDialog(closePopup);
}

function definePrintReport(id, printReport) {
  if (typeof formDynamicScripts[id].definePrintReport == "function")
    formDynamicScripts[id].definePrintReport(printReport);
}

function defineGetFieldValue(id, getFieldValue) {
  if (typeof formDynamicScripts[id].defineGetFieldValue == "function")
    formDynamicScripts[id].defineGetFieldValue(getFieldValue);
}

function defineGetFormFieldsByCode(id, getField) {
  if (typeof formDynamicScripts[id].defineGetFormFieldsByCode == "function")
    formDynamicScripts[id].defineGetFormFieldsByCode(getField);
}

function defineSetFieldValue(id, setFieldValue) {
  if (typeof formDynamicScripts[id].defineSetFieldValue == "function")
    formDynamicScripts[id].defineSetFieldValue(setFieldValue);
}

function defineDataset(id, componentPersistEntityList) {
  if (typeof formDynamicScripts[id].defineDataset == "function")
    formDynamicScripts[id].defineDataset(componentPersistEntityList);
}

function defineGetComponentData(id, getComponentData) {
  if (typeof formDynamicScripts[id].defineGetComponentData == "function")
    formDynamicScripts[id].defineGetComponentData(getComponentData);
}

function defineSetTableRowActiveById(id, setTableRowActiveById) {
  if (typeof formDynamicScripts[id].defineSetTableRowActiveById == "function")
    formDynamicScripts[id].defineSetTableRowActiveById(setTableRowActiveById);
}

function defineNavigator(id, navigate) {
  if (typeof formDynamicScripts[id].defineNavigator == "function")
    formDynamicScripts[id].defineNavigator(navigate);
}

function nativeFormEventsHandler(id, type, metadata) {
  if (typeof formDynamicScripts[id].nativeFormEventsHandler == "function")
    formDynamicScripts[id].nativeFormEventsHandler(type, metadata);
}

// function testRunning() {
// //  alert('running');
//   const testRunningClass = new TestRunningClass();
//   formDynamicScripts['what?'] = testRunningClass;
//   formDynamicScripts['what?'].testRunning();
//   //testRunningClass.testRunning()
// }
//
// class TestRunningClass {
//
//   message = null;
//
//   constructor() {
//   }
//
//   testRunning() {
//     // alert(typeof this.testRunning2);
//     if ((typeof this.testRunning2 == "function")) this.testRunning2();
//   }
//
//   testRunning2() {
//   // this.message = 'what';
//     alert(this.message);
//   }
//
// }

