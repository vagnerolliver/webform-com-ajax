// o formuário de exemplo é para avise me quando o produto nao tiver em estoque
// pode ser replicado para qualquer formulário

$(".avise-me-alert form").validate({
    submitHandler: function( form ) { 
  
      var bloco_alert = $(form).closest(".avise-me-alert")
      var email_let_me = $(form).find('input[type=email]').val();
      var product_name = $("#product_name").val()
      var product_reference = $("#reference").val()
      var sku_in_variant = $("input[name='sku']:checked").val()
      var name_in_variant = $("input[name='sku']:checked").data("variant-name")
    
      $.ajax({
        type: "POST",
        url: "/webform",
        data: {
            key:'lemonbasics-avise-me',
            reply_to: email_let_me,
            email: email_let_me,
            nome_do_produto: product_name,
            referencia_do_produto: product_reference,
            nome_da_variante: name_in_variant,
            sku_da_variante: sku_in_variant
          }
      })

      .always(function() {
        $(form).fadeOut();
        $(bloco_alert).find(".text").html("<span class='color--pink-regular'>E-mail cadastrado com sucesso!.. aguarde que em breve entraremos em contato.</span>")
        setTimeout(function(){ 
          $(bloco_alert).find(".text").html("");
        }, 7000);
      });
    return false; // required to block normal submit since you used ajax
    }
  })
