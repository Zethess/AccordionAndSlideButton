class TemplateManager {
  loadEventListeners() {
    $(document).ready(() => {
      
      $('.option-child-title p').click((event) => {
          this.showAdditionalRoomConfiguration($(event.currentTarget));
      });
    });
  }
 
  showAdditionalRoomConfiguration(roomButton){
    // Obtener todos los divs que son hermanos del div con clase "form-content"
    const additionalRoomConfDiv = roomButton.closest('.contain-options-child').find('.child-configurations');     
    if (additionalRoomConfDiv.hasClass('childs-configuration-hide')) {
      this.closeAllRoomConfDiv(additionalRoomConfDiv); 
    }
    additionalRoomConfDiv.slideToggle(200);
    additionalRoomConfDiv.toggleClass('childs-configuration-hide');
    }
    closeAllRoomConfDiv(currentRoomConfDiv){
      const roomConfDivs=$(".child-configurations");
      roomConfDivs.each(function(){
        const roomDiv = $(this); //argumento que se pasa por parametro
        if (roomDiv.is(currentRoomConfDiv)) {
          return;
        }
        if (!roomDiv.hasClass('childs-configuration-hide')) {
          roomDiv.slideToggle(200);
          roomDiv.toggleClass('childs-configuration-hide');
      }
        
      });
    }
    init() {
      this.loadEventListeners();
    }
  }
  const templateManager = new TemplateManager();
  templateManager.init();
  
  
  
  