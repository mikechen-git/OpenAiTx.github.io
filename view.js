// Add translations object - Global scope
const translations = {
    'en': {
        'missingParams': 'Missing Parameters',
        'missingParamsDesc': 'Please provide both \'user\' and \'project\' parameters in the URL.',
        'missingParamsExample': 'Example: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
        'errorLoading': 'Error Loading Content',
        'errorLoadingDesc': 'Failed to load the markdown content. Please check:',
        'errorLoadingList1': 'The URL parameters are correct',
        'errorLoadingList2': 'The file exists at the specified path',
        'errorLoadingList3': 'You have an active internet connection',
        'errorDetails': 'Error details:',
        'repoNotFound': 'Repository Not Found',
        'repoNotFoundDesc': 'This GitHub repository does not exist. Please check the repository name and try again.',
        'docNotFound': 'Project Documentation Not Found',
        'docNotFoundDesc': 'The documentation for this project has not been indexed yet. Click the button below to submit for indexing.',
        'submit': 'Submit',
        'submissionCompleted': 'Submission completed',
        'submissionFailed': 'Submission failed: ',
        'tableOfContents': 'Table of Contents'
    },
        'zh-CN': {
            'missingParams': '缺少参数',
            'missingParamsDesc': '请在URL中提供\'user\'和\'project\'参数。',
            'missingParamsExample': '示例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': '加载内容时出错',
            'errorLoadingDesc': '加载markdown内容失败。请检查：',
            'errorLoadingList1': 'URL参数正确',
            'errorLoadingList2': '指定路径的文件存在',
            'errorLoadingList3': '您有活跃的互联网连接',
            'errorDetails': '错误详情：',
            'repoNotFound': '仓库未找到',
            'repoNotFoundDesc': '此 GitHub 仓库不存在。请检查仓库名称后重试。',
            'docNotFound': '项目文档未找到',
            'docNotFoundDesc': '此项目的文档尚未被索引。点击下方按钮提交索引。',
            'submit': '提交',
            'submissionCompleted': '提交完成',
            'submissionFailed': '提交失败：',
            'tableOfContents': '目录'
        },
        'zh-TW': {
            'missingParams': '缺少參數',
            'missingParamsDesc': '請在URL中提供\'user\'和\'project\'參數。',
            'missingParamsExample': '示例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': '載入內容時出錯',
            'errorLoadingDesc': '載入markdown內容失敗。請檢查：',
            'errorLoadingList1': 'URL參數正確',
            'errorLoadingList2': '指定路徑的檔案存在',
            'errorLoadingList3': '您有活躍的網際網路連線',
            'errorDetails': '錯誤詳情：',
            'repoNotFound': '倉庫未找到',
            'repoNotFoundDesc': '此 GitHub 倉庫不存在。請檢查倉庫名稱後重試。',
            'docNotFound': '項目文檔未找到',
            'docNotFoundDesc': '此項目的文檔尚未被索引。點擊下方按鈕提交索引。',
            'submit': '提交',
            'submissionCompleted': '提交完成',
            'submissionFailed': '提交失敗：',
            'tableOfContents': '目錄'
        },
        'ja': {
            'missingParams': 'パラメータが不足しています',
            'missingParamsDesc': 'URLに\'user\'と\'project\'パラメータを提供してください。',
            'missingParamsExample': '例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'コンテンツの読み込みエラー',
            'errorLoadingDesc': 'markdownコンテンツの読み込みに失敗しました。以下を確認してください：',
            'errorLoadingList1': 'URLパラメータが正しい',
            'errorLoadingList2': '指定されたパスにファイルが存在する',
            'errorLoadingList3': 'アクティブなインターネット接続がある',
            'errorDetails': 'エラー詳細：',
            'repoNotFound': 'リポジトリが見つかりません',
            'repoNotFoundDesc': 'この GitHub リポジトリは存在しません。リポジトリ名を確認して再試行してください。',
            'docNotFound': 'プロジェクトドキュメントが見つかりません',
            'docNotFoundDesc': 'このプロジェクトのドキュメントはまだインデックスされていません。下のボタンをクリックしてインデックスを提出してください。',
            'submit': '提出',
            'submissionCompleted': '提出完了',
            'submissionFailed': '提出失敗：',
            'tableOfContents': '目次'
        },
        'ko': {
            'missingParams': '매개변수 누락',
            'missingParamsDesc': 'URL에 \'user\'와 \'project\' 매개변수를 제공하세요.',
            'missingParamsExample': '예: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': '콘텐츠 로딩 오류',
            'errorLoadingDesc': 'markdown 콘텐츠 로딩에 실패했습니다. 다음을 확인하세요:',
            'errorLoadingList1': 'URL 매개변수가 올바름',
            'errorLoadingList2': '지정된 경로에 파일이 존재함',
            'errorLoadingList3': '활성 인터넷 연결이 있음',
            'errorDetails': '오류 세부사항:',
            'repoNotFound': '저장소를 찾을 수 없습니다',
            'repoNotFoundDesc': '이 GitHub 저장소가 존재하지 않습니다. 저장소 이름을 확인하고 다시 시도하세요.',
            'docNotFound': '프로젝트 문서를 찾을 수 없습니다',
            'docNotFoundDesc': '이 프로젝트의 문서가 아직 인덱싱되지 않았습니다. 아래 버튼을 클릭하여 인덱싱을 제출하세요.',
            'submit': '제출',
            'submissionCompleted': '제출 완료',
            'submissionFailed': '제출 실패: ',
            'tableOfContents': '목차'
        },
        'hi': {
            'missingParams': 'गुम पैरामीटर',
            'missingParamsDesc': 'कृपया URL में \'user\' और \'project\' पैरामीटर प्रदान करें।',
            'missingParamsExample': 'उदाहरण: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'सामग्री लोड करने में त्रुटि',
            'errorLoadingDesc': 'markdown सामग्री लोड करने में विफल। कृपया जांचें:',
            'errorLoadingList1': 'URL पैरामीटर सही हैं',
            'errorLoadingList2': 'निर्दिष्ट पथ पर फ़ाइल मौजूद है',
            'errorLoadingList3': 'आपके पास सक्रिय इंटरनेट कनेक्शन है',
            'errorDetails': 'त्रुटि विवरण:',
            'repoNotFound': 'रिपॉजिटरी नहीं मिली',
            'repoNotFoundDesc': 'यह GitHub रिपॉजिटरी मौजूद नहीं है। कृपया रिपॉजिटरी नाम जांचें और पुनः प्रयास करें।',
            'docNotFound': 'प्रोजेक्ट दस्तावेज़ नहीं मिला',
            'docNotFoundDesc': 'इस प्रोजेक्ट का दस्तावेज़ अभी तक अनुक्रमित नहीं हुआ है। अनुक्रमण के लिए नीचे दिए गए बटन पर क्लिक करें।',
            'submit': 'सबमिट करें',
            'submissionCompleted': 'सबमिशन पूर्ण',
            'submissionFailed': 'सबमिशन विफल: ',
            'tableOfContents': 'सूची'
        },
        'fa': {
            'missingParams': 'پارامترهای گمشده',
            'missingParamsDesc': 'لطفاً پارامترهای \'user\' و \'project\' را در URL ارائه دهید.',
            'missingParamsExample': 'مثال: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'خطا در بارگذاری محتوا',
            'errorLoadingDesc': 'بارگذاری محتوای markdown ناموفق بود. لطفاً بررسی کنید:',
            'errorLoadingList1': 'پارامترهای URL صحیح هستند',
            'errorLoadingList2': 'فایل در مسیر مشخص شده وجود دارد',
            'errorLoadingList3': 'اتصال فعال اینترنت دارید',
            'errorDetails': 'جزئیات خطا:',
            'repoNotFound': 'مخزن یافت نشد',
            'repoNotFoundDesc': 'این مخزن GitHub وجود ندارد. لطفاً نام مخزن را بررسی کرده و دوباره تلاش کنید.',
            'docNotFound': 'مستندات پروژه یافت نشد',
            'docNotFoundDesc': 'مستندات این پروژه هنوز فهرست‌بندی نشده است. برای ارسال فهرست‌بندی روی دکمه زیر کلیک کنید.',
            'submit': 'ارسال',
            'submissionCompleted': 'ارسال تکمیل شد',
            'submissionFailed': 'ارسال ناموفق: ',
            'tableOfContents': 'فهرست مطالب'
        },
        'id': {
            'missingParams': 'Parameter Hilang',
            'missingParamsDesc': 'Harap berikan parameter \'user\' dan \'project\' di URL.',
            'missingParamsExample': 'Contoh: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Kesalahan Memuat Konten',
            'errorLoadingDesc': 'Gagal memuat konten markdown. Harap periksa:',
            'errorLoadingList1': 'Parameter URL benar',
            'errorLoadingList2': 'File ada di path yang ditentukan',
            'errorLoadingList3': 'Anda memiliki koneksi internet aktif',
            'errorDetails': 'Detail kesalahan:',
            'repoNotFound': 'Repositori Tidak Ditemukan',
            'repoNotFoundDesc': 'Repositori GitHub ini tidak ada. Harap periksa nama repositori dan coba lagi.',
            'docNotFound': 'Dokumentasi Proyek Tidak Ditemukan',
            'docNotFoundDesc': 'Dokumentasi untuk proyek ini belum diindeks. Klik tombol di bawah untuk mengirimkan indeks.',
            'submit': 'Kirim',
            'submissionCompleted': 'Pengiriman selesai',
            'submissionFailed': 'Pengiriman gagal: ',
            'tableOfContents': 'Daftar Isi'
        },
        'th': {
            'missingParams': 'พารามิเตอร์หายไป',
            'missingParamsDesc': 'กรุณาให้พารามิเตอร์ \'user\' และ \'project\' ใน URL',
            'missingParamsExample': 'ตัวอย่าง: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'เกิดข้อผิดพลาดในการโหลดเนื้อหา',
            'errorLoadingDesc': 'ไม่สามารถโหลดเนื้อหา markdown ได้ กรุณาตรวจสอบ:',
            'errorLoadingList1': 'พารามิเตอร์ URL ถูกต้อง',
            'errorLoadingList2': 'ไฟล์มีอยู่ที่เส้นทางที่ระบุ',
            'errorLoadingList3': 'คุณมีการเชื่อมต่ออินเทอร์เน็ตที่ใช้งานได้',
            'errorDetails': 'รายละเอียดข้อผิดพลาด:',
            'repoNotFound': 'ไม่พบ Repository',
            'repoNotFoundDesc': 'Repository GitHub นี้ไม่มีอยู่ กรุณาตรวจสอบชื่อ repository และลองใหม่อีกครั้ง',
            'docNotFound': 'ไม่พบเอกสารโครงการ',
            'docNotFoundDesc': 'เอกสารสำหรับโครงการนี้ยังไม่ได้รับการจัดทำดัชนี คลิกปุ่มด้านล่างเพื่อส่งการจัดทำดัชนี',
            'submit': 'ส่ง',
            'submissionCompleted': 'การส่งเสร็จสิ้น',
            'submissionFailed': 'การส่งล้มเหลว: ',
            'tableOfContents': 'สารบัญ'
        },
        'fr': {
            'missingParams': 'Paramètres manquants',
            'missingParamsDesc': 'Veuillez fournir les paramètres \'user\' et \'project\' dans l\'URL.',
            'missingParamsExample': 'Exemple: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Erreur de chargement du contenu',
            'errorLoadingDesc': 'Échec du chargement du contenu markdown. Veuillez vérifier:',
            'errorLoadingList1': 'Les paramètres URL sont corrects',
            'errorLoadingList2': 'Le fichier existe au chemin spécifié',
            'errorLoadingList3': 'Vous avez une connexion Internet active',
            'errorDetails': 'Détails de l\'erreur:',
            'repoNotFound': 'Dépôt introuvable',
            'repoNotFoundDesc': 'Ce dépôt GitHub n\'existe pas. Veuillez vérifier le nom du dépôt et réessayer.',
            'docNotFound': 'Documentation du projet introuvable',
            'docNotFoundDesc': 'La documentation pour ce projet n\'a pas encore été indexée. Cliquez sur le bouton ci-dessous pour soumettre l\'indexation.',
            'submit': 'Soumettre',
            'submissionCompleted': 'Soumission terminée',
            'submissionFailed': 'Échec de la soumission: ',
            'tableOfContents': 'Table des matières'
        },
        'de': {
            'missingParams': 'Fehlende Parameter',
            'missingParamsDesc': 'Bitte geben Sie die Parameter \'user\' und \'project\' in der URL an.',
            'missingParamsExample': 'Beispiel: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Fehler beim Laden des Inhalts',
            'errorLoadingDesc': 'Laden des Markdown-Inhalts fehlgeschlagen. Bitte überprüfen Sie:',
            'errorLoadingList1': 'Die URL-Parameter sind korrekt',
            'errorLoadingList2': 'Die Datei existiert am angegebenen Pfad',
            'errorLoadingList3': 'Sie haben eine aktive Internetverbindung',
            'errorDetails': 'Fehlerdetails:',
            'repoNotFound': 'Repository nicht gefunden',
            'repoNotFoundDesc': 'Dieses GitHub-Repository existiert nicht. Bitte überprüfen Sie den Repository-Namen und versuchen Sie es erneut.',
            'docNotFound': 'Projektdokumentation nicht gefunden',
            'docNotFoundDesc': 'Die Dokumentation für dieses Projekt wurde noch nicht indiziert. Klicken Sie auf die Schaltfläche unten, um die Indizierung zu übermitteln.',
            'submit': 'Übermitteln',
            'submissionCompleted': 'Übermittlung abgeschlossen',
            'submissionFailed': 'Übermittlung fehlgeschlagen: ',
            'tableOfContents': 'Inhaltsverzeichnis'
        },
        'es': {
            'missingParams': 'Parámetros faltantes',
            'missingParamsDesc': 'Por favor proporcione los parámetros \'user\' y \'project\' en la URL.',
            'missingParamsExample': 'Ejemplo: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Error al cargar contenido',
            'errorLoadingDesc': 'Error al cargar el contenido markdown. Por favor verifique:',
            'errorLoadingList1': 'Los parámetros URL son correctos',
            'errorLoadingList2': 'El archivo existe en la ruta especificada',
            'errorLoadingList3': 'Tiene una conexión a Internet activa',
            'errorDetails': 'Detalles del error:',
            'repoNotFound': 'Repositorio no encontrado',
            'repoNotFoundDesc': 'Este repositorio de GitHub no existe. Por favor verifique el nombre del repositorio e inténtelo de nuevo.',
            'docNotFound': 'Documentación del proyecto no encontrada',
            'docNotFoundDesc': 'La documentación para este proyecto aún no ha sido indexada. Haga clic en el botón de abajo para enviar la indexación.',
            'submit': 'Enviar',
            'submissionCompleted': 'Envío completado',
            'submissionFailed': 'Envío fallido: ',
            'tableOfContents': 'Tabla de contenidos'
        },
        'it': {
            'missingParams': 'Parametri mancanti',
            'missingParamsDesc': 'Si prega di fornire i parametri \'user\' e \'project\' nell\'URL.',
            'missingParamsExample': 'Esempio: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Errore nel caricamento del contenuto',
            'errorLoadingDesc': 'Impossibile caricare il contenuto markdown. Si prega di verificare:',
            'errorLoadingList1': 'I parametri URL sono corretti',
            'errorLoadingList2': 'Il file esiste nel percorso specificato',
            'errorLoadingList3': 'Hai una connessione Internet attiva',
            'errorDetails': 'Dettagli dell\'errore:',
            'repoNotFound': 'Repository non trovato',
            'repoNotFoundDesc': 'Questo repository GitHub non esiste. Si prega di verificare il nome del repository e riprovare.',
            'docNotFound': 'Documentazione del progetto non trovata',
            'docNotFoundDesc': 'La documentazione per questo progetto non è ancora stata indicizzata. Clicca sul pulsante qui sotto per inviare l\'indicizzazione.',
            'submit': 'Invia',
            'submissionCompleted': 'Invio completato',
            'submissionFailed': 'Invio fallito: ',
            'tableOfContents': 'Sommario'
        },
        'ru': {
            'missingParams': 'Отсутствующие параметры',
            'missingParamsDesc': 'Пожалуйста, укажите параметры \'user\' и \'project\' в URL.',
            'missingParamsExample': 'Пример: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Ошибка загрузки контента',
            'errorLoadingDesc': 'Не удалось загрузить содержимое markdown. Пожалуйста, проверьте:',
            'errorLoadingList1': 'Параметры URL корректны',
            'errorLoadingList2': 'Файл существует по указанному пути',
            'errorLoadingList3': 'У вас есть активное интернет-соединение',
            'errorDetails': 'Детали ошибки:',
            'repoNotFound': 'Репозиторий не найден',
            'repoNotFoundDesc': 'Этот репозиторий GitHub не существует. Пожалуйста, проверьте название репозитория и попробуйте снова.',
            'docNotFound': 'Документация проекта не найдена',
            'docNotFoundDesc': 'Документация для этого проекта еще не проиндексирована. Нажмите кнопку ниже, чтобы отправить индексацию.',
            'submit': 'Отправить',
            'submissionCompleted': 'Отправка завершена',
            'submissionFailed': 'Отправка не удалась: ',
            'tableOfContents': 'Содержание'
        },
        'pt': {
            'missingParams': 'Parâmetros ausentes',
            'missingParamsDesc': 'Por favor, forneça os parâmetros \'user\' e \'project\' na URL.',
            'missingParamsExample': 'Exemplo: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Erro ao carregar conteúdo',
            'errorLoadingDesc': 'Falha ao carregar o conteúdo markdown. Por favor, verifique:',
            'errorLoadingList1': 'Os parâmetros URL estão corretos',
            'errorLoadingList2': 'O arquivo existe no caminho especificado',
            'errorLoadingList3': 'Você tem uma conexão ativa com a internet',
            'errorDetails': 'Detalhes do erro:',
            'repoNotFound': 'Repositório não encontrado',
            'repoNotFoundDesc': 'Este repositório GitHub não existe. Por favor, verifique o nome do repositório e tente novamente.',
            'docNotFound': 'Documentação do projeto não encontrada',
            'docNotFoundDesc': 'A documentação para este projeto ainda não foi indexada. Clique no botão abaixo para enviar a indexação.',
            'submit': 'Enviar',
            'submissionCompleted': 'Envio concluído',
            'submissionFailed': 'Falha no envio: '
        },
        'nl': {
            'missingParams': 'Ontbrekende parameters',
            'missingParamsDesc': 'Geef de parameters \'user\' en \'project\' op in de URL.',
            'missingParamsExample': 'Voorbeeld: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Fout bij het laden van inhoud',
            'errorLoadingDesc': 'Het laden van markdown-inhoud is mislukt. Controleer het volgende:',
            'errorLoadingList1': 'De URL-parameters zijn correct',
            'errorLoadingList2': 'Het bestand bestaat op het opgegeven pad',
            'errorLoadingList3': 'U heeft een actieve internetverbinding',
            'errorDetails': 'Foutdetails:',
            'repoNotFound': 'Repository niet gevonden',
            'repoNotFoundDesc': 'Deze GitHub-repository bestaat niet. Controleer de repository-naam en probeer het opnieuw.',
            'docNotFound': 'Projectdocumentatie niet gevonden',
            'docNotFoundDesc': 'De documentatie voor dit project is nog niet geïndexeerd. Klik op de knop hieronder om indexering in te dienen.',
            'submit': 'Indienen',
            'submissionCompleted': 'Indiening voltooid',
            'submissionFailed': 'Indiening mislukt: '
        },
        'pl': {
            'missingParams': 'Brakujące parametry',
            'missingParamsDesc': 'Proszę podać parametry \'user\' i \'project\' w URL.',
            'missingParamsExample': 'Przykład: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Błąd ładowania zawartości',
            'errorLoadingDesc': 'Nie udało się załadować zawartości markdown. Sprawdź:',
            'errorLoadingList1': 'Parametry URL są poprawne',
            'errorLoadingList2': 'Plik istnieje w określonej ścieżce',
            'errorLoadingList3': 'Masz aktywne połączenie internetowe',
            'errorDetails': 'Szczegóły błędu:',
            'repoNotFound': 'Repozytorium nie znalezione',
            'repoNotFoundDesc': 'To repozytorium GitHub nie istnieje. Sprawdź nazwę repozytorium i spróbuj ponownie.',
            'docNotFound': 'Dokumentacja projektu nie znaleziona',
            'docNotFoundDesc': 'Dokumentacja dla tego projektu nie została jeszcze zindeksowana. Kliknij przycisk poniżej, aby przesłać indeksowanie.',
            'submit': 'Prześlij',
            'submissionCompleted': 'Przesłanie zakończone',
            'submissionFailed': 'Przesłanie nie powiodło się: '
        },
        'ar': {
            'missingParams': 'معاملات مفقودة',
            'missingParamsDesc': 'يرجى تقديم المعاملات \'user\' و \'project\' في الرابط.',
            'missingParamsExample': 'مثال: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'خطأ في تحميل المحتوى',
            'errorLoadingDesc': 'فشل في تحميل محتوى markdown. يرجى التحقق من:',
            'errorLoadingList1': 'معاملات الرابط صحيحة',
            'errorLoadingList2': 'الملف موجود في المسار المحدد',
            'errorLoadingList3': 'لديك اتصال إنترنت نشط',
            'errorDetails': 'تفاصيل الخطأ:',
            'repoNotFound': 'المستودع غير موجود',
            'repoNotFoundDesc': 'مستودع GitHub هذا غير موجود. يرجى التحقق من اسم المستودع والمحاولة مرة أخرى.',
            'docNotFound': 'وثائق المشروع غير موجودة',
            'docNotFoundDesc': 'لم يتم فهرسة وثائق هذا المشروع بعد. انقر على الزر أدناه لإرسال الفهرسة.',
            'submit': 'إرسال',
            'submissionCompleted': 'اكتمل الإرسال',
            'submissionFailed': 'فشل الإرسال: '
        },
        'tr': {
            'missingParams': 'Eksik parametreler',
            'missingParamsDesc': 'Lütfen URL\'de \'user\' ve \'project\' parametrelerini sağlayın.',
            'missingParamsExample': 'Örnek: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'İçerik yükleme hatası',
            'errorLoadingDesc': 'Markdown içeriği yüklenemedi. Lütfen kontrol edin:',
            'errorLoadingList1': 'URL parametreleri doğru',
            'errorLoadingList2': 'Dosya belirtilen yolda mevcut',
            'errorLoadingList3': 'Aktif internet bağlantınız var',
            'errorDetails': 'Hata detayları:',
            'repoNotFound': 'Depo bulunamadı',
            'repoNotFoundDesc': 'Bu GitHub deposu mevcut değil. Lütfen depo adını kontrol edin ve tekrar deneyin.',
            'docNotFound': 'Proje dokümantasyonu bulunamadı',
            'docNotFoundDesc': 'Bu proje için dokümantasyon henüz dizinlenmemiş. Dizinlemeyi göndermek için aşağıdaki düğmeye tıklayın.',
            'submit': 'Gönder',
            'submissionCompleted': 'Gönderim tamamlandı',
            'submissionFailed': 'Gönderim başarısız: '
        },
        'vi': {
            'missingParams': 'Thiếu tham số',
            'missingParamsDesc': 'Vui lòng cung cấp các tham số \'user\' và \'project\' trong URL.',
            'missingParamsExample': 'Ví dụ: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Lỗi tải nội dung',
            'errorLoadingDesc': 'Không thể tải nội dung markdown. Vui lòng kiểm tra:',
            'errorLoadingList1': 'Các tham số URL chính xác',
            'errorLoadingList2': 'Tệp tồn tại tại đường dẫn được chỉ định',
            'errorLoadingList3': 'Bạn có kết nối internet hoạt động',
            'errorDetails': 'Chi tiết lỗi:',
            'repoNotFound': 'Không tìm thấy repository',
            'repoNotFoundDesc': 'Repository GitHub này không tồn tại. Vui lòng kiểm tra tên repository và thử lại.',
            'docNotFound': 'Không tìm thấy tài liệu dự án',
            'docNotFoundDesc': 'Tài liệu cho dự án này chưa được lập chỉ mục. Nhấp vào nút bên dưới để gửi lập chỉ mục.',
            'submit': 'Gửi',
            'submissionCompleted': 'Gửi hoàn tất',
            'submissionFailed': 'Gửi thất bại: '
        }
    };

document.addEventListener('DOMContentLoaded', function() {
    // Clean up old submission records (older than 24 hours)
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('submitted_')) {
            const timestamp = parseInt(localStorage.getItem(key));
            if (timestamp && (now - timestamp) > oneDay) {
                localStorage.removeItem(key);
            }
        }
    }

    // Configure marked options
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value;
                } catch (e) {
                    console.error(e);
                }
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
    });

    // Get URL parameters while preserving case
    const searchParams = window.location.search.substring(1).split('&');
    const params = {};
    searchParams.forEach(param => {
        const [key, value] = param.split('=');
        if (key && value) {
            params[key] = decodeURIComponent(value);
        }
    });

    const user = params['user'];
    const project = params['project'];
    const lang = params['lang'] || 'en'; // Default to English if no language specified

    // Get translations for current language
    const t = translations[lang] || translations['en'];

    // Function to update SEO meta tags
    function updateSEO(repoData) {
        const title = `${user}/${project} - ${repoData.name || project}`;
        const description = repoData.description || `${user}/${project} - GitHub repository documentation and information`;
        const keywords = `${user}, ${project}, GitHub, repository, documentation, ${repoData.language || ''}`;
        
        // Update title
        document.title = title;
        
        // Update meta tags
        const metaTitle = document.querySelector('meta[name="title"]');
        if (metaTitle) metaTitle.setAttribute('content', title);
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', description);
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute('content', keywords);
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `https://openaitx.github.io/view.html?user=${user}&project=${project}&lang=${lang}`);
    }

    // Update GitHub repository link
    const githubRepoLink = document.getElementById('githubRepoLink');
    if (githubRepoLink && user && project) {
        githubRepoLink.href = `https://github.com/${user}/${project}`;
        githubRepoLink.textContent = `${user}/${project}`;
    }


    
    // Validate required parameters
    if (!user || !project) {
        document.getElementById('content').innerHTML = `
            <div class="error">
                <h2>${t.missingParams}</h2>
                <p>${t.missingParamsDesc}</p>
                <p>${t.missingParamsExample}</p>
            </div>
        `;
        return;
    }

    // Check if GitHub repository exists first
    const githubApiUrl = `https://api.github.com/repos/${user}/${project}`;

    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            
            if (data.message === "Not Found") {
                // Repository doesn't exist
                document.getElementById('content').innerHTML = `
                    <div class="error">
                        <h2>${t.repoNotFound}</h2>
                        <p>${t.repoNotFoundDesc}</p>
                    </div>
                `;
                return;
            }

            // Repository exists, update SEO with repository data
            updateSEO(data);

            // Repository exists, now check if README exists
            const apiUrl = `https://openaitx.github.io/OpenAiTx/projects/${user}/${project}/README-${lang}.md`;
            
            return fetch(apiUrl);
        })
        .then(response => {
            if (!response) return; // Repository doesn't exist, already handled

            if (response.status === 404) {
                // README doesn't exist, show submit button
                const submitButton = document.createElement('button');
                submitButton.textContent = t.submit;
                submitButton.className = 'submit-button';
                submitButton.onclick = async () => {
                    try {
                        // Check if we've already submitted this project
                        const submissionKey = `submitted_${user}_${project}`;
                        const alreadySubmitted = localStorage.getItem(submissionKey);
                        
                        if (alreadySubmitted) {
                            alert('Project already submitted. Please wait for processing.');
                            return;
                        }
                        
                        // Disable button to prevent multiple clicks
                        submitButton.disabled = true;
                        submitButton.textContent = 'Submitting...';
                        
                        // Mark as submitted
                        localStorage.setItem(submissionKey, Date.now().toString());
                        
                        const response = await fetch('https://openaitxapi.azurewebsites.net/api/submit-project', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                project: `https://github.com/${user}/${project}`
                            })
                        });

                        const data = await response.json();

                        if (!response.ok) {
                            throw new Error(data.error || `HTTP error! status: ${response.status}`);
                        }

                        alert(t.submissionCompleted);
                        // Change button text to show completion
                        submitButton.textContent = 'Submitted';
                        submitButton.style.background = '#6c757d';
                    } catch (error) {
                        alert(`${t.submissionFailed}${error.message}`);
                        // Re-enable button and remove submission flag on error
                        submitButton.disabled = false;
                        submitButton.textContent = t.submit;
                        localStorage.removeItem(`submitted_${user}_${project}`);
                    }
                };

                document.getElementById('content').innerHTML = `
                    <div class="error">
                        <h2>${t.docNotFound}</h2>
                        <p>${t.docNotFoundDesc}</p>
                    </div>
                `;
                document.getElementById('content').appendChild(submitButton);
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.text();
        })
        .then(markdown => {
            if (!markdown) return; // Already handled above

            // Render the markdown
            const content = marked.parse(markdown);
            document.getElementById('content').innerHTML = content;

            // Generate table of contents
            generateTableOfContents();

            // Apply syntax highlighting to all code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });

            // --- SEO LOGIC ---
            // Get the rendered content's first h1 or first 100 chars of text
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            let mainText = '';
            const firstH1 = tempDiv.querySelector('h1');
            if (firstH1 && firstH1.innerText.trim()) {
                mainText = firstH1.innerText.trim();
            } else {
                // Get all textContent, remove whitespace, take first 100 chars
                mainText = tempDiv.innerText.replace(/\s+/g, '').slice(0, 100);
            }
            const seoText = `${user}/${project} | ${mainText}`;
            if (mainText) {
                document.title = seoText;
                const metaTitle = document.querySelector('meta[name="title"]');
                if (metaTitle) metaTitle.setAttribute('content', seoText);
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) metaDesc.setAttribute('content', seoText);
                const ogTitle = document.querySelector('meta[property="og:title"]');
                if (ogTitle) ogTitle.setAttribute('content', seoText);
                const ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) ogDesc.setAttribute('content', seoText);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('content').innerHTML = `
                <div class="error">
                    <h2>${t.errorLoading}</h2>
                    <p>${t.errorLoadingDesc}</p>
                    <ul>
                        <li>${t.errorLoadingList1}</li>
                        <li>${t.errorLoadingList2}</li>
                        <li>${t.errorLoadingList3}</li>
                    </ul>
                    <p>${t.errorDetails} ${error.message}</p>
                </div>
            `;
        });
}); 

// Generate table of contents from headings
function generateTableOfContents() {
    const content = document.getElementById('content');
    const tocList = document.getElementById('tocList');
    const tocSidebar = document.getElementById('tocSidebar');
    const tocTitle = document.querySelector('.toc-title');
    const mainContainer = document.querySelector('.main-container');
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    // Get current language and translations
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const t = translations[lang] || translations['en'];
    
    // Check if it's mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Update TOC title with translation
    if (tocTitle) {
        tocTitle.textContent = t.tableOfContents;
    }
    
    // Clear existing TOC
    tocList.innerHTML = '';
    
    // Hide TOC on mobile or when no headings
    if (headings.length === 0 || isMobile) {
        tocSidebar.style.display = 'none';
        mainContainer.classList.add('full-width');
        if (headings.length === 0) {
            return;
        }
    } else {
        // Show sidebar and remove full-width class on desktop
        tocSidebar.style.display = 'block';
        mainContainer.classList.remove('full-width');
    }
    
    headings.forEach((heading, index) => {
        // Generate unique ID for the heading
        const id = `heading-${index}`;
        heading.id = id;
        
        // Create TOC item
        const li = document.createElement('li');
        li.className = 'toc-item';
        
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.className = `toc-link level-${heading.tagName.charAt(1)}`;
        link.textContent = heading.textContent.trim();
        
        // Smooth scroll to heading
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active state
                updateActiveTocItem(link);
            }
        });
        
        li.appendChild(link);
        tocList.appendChild(li);
    });
    
    // Add scroll spy functionality
    setupScrollSpy(headings);
}

// Update active TOC item
function updateActiveTocItem(activeLink) {
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Setup scroll spy to highlight current section
function setupScrollSpy(headings) {
    const tocLinks = document.querySelectorAll('.toc-link');
    
    function updateActiveSection() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset for better UX
        
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            const offsetTop = window.scrollY + rect.top;
            
            if (offsetTop <= scrollPosition) {
                current = heading.id;
            }
        });
        
        // Update active state
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttle scroll event for better performance
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    updateActiveSection();
}

// Handle window resize to show/hide TOC on mobile
window.addEventListener('resize', function() {
    const tocSidebar = document.getElementById('tocSidebar');
    const mainContainer = document.querySelector('.main-container');
    
    if (!tocSidebar || !mainContainer) return;
    
    const isMobile = window.innerWidth <= 768;
    const hasContent = document.querySelectorAll('#content h1, #content h2, #content h3, #content h4, #content h5, #content h6').length > 0;
    
    if (isMobile || !hasContent) {
        tocSidebar.style.display = 'none';
        mainContainer.classList.add('full-width');
    } else {
        tocSidebar.style.display = 'block';
        mainContainer.classList.remove('full-width');
    }
});

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    if (shouldUseDark) {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeIcon').textContent = '☀️';
    } else {
        document.getElementById('themeIcon').textContent = '🌙';
    }
}

// Function to change language
function changeLanguage(lang) {
    const t = translations[lang] || translations['en'];

    // Update page title based on content
    if (window.currentUser && window.currentProject) {
        document.title = `${window.currentProject} - ${window.currentUser} | Open AI Tx`;
    } else {
        document.title = 'Open AI Tx';
    }

    // Update text content in the page
    const tocTitle = document.querySelector('.toc-title');
    if (tocTitle) {
        tocTitle.textContent = t.tableOfContents;
    }

    // Store selected language
    localStorage.setItem('preferredLanguage', lang);

    // Update any other translatable content
    updateUILanguage(lang);
}

// Update UI elements based on language
function updateUILanguage(lang) {
    const t = translations[lang] || translations['en'];
    // Update any error messages or loading text that might be visible
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        if(loadingElement.textContent === 'Loading...'){
            loadingElement.textContent = 'Loading...';
        }else{
            loadingElement.textContent = t.errorLoading || 'Loading...';
        }
    }
}

// Language selector functions
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

function generateLanguageLinks() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentUser = urlParams.get('user');
    const currentProject = urlParams.get('project');
    
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'zh-CN', name: '简体中文' },
        { code: 'zh-TW', name: '繁體中文' },
        { code: 'ja', name: '日本語' },
        { code: 'ko', name: '한국어' },
        { code: 'th', name: 'ไทย' },
        { code: 'hi', name: 'हिन्दी' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'ar', name: 'العربية' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'pt', name: 'Português' },
        { code: 'ru', name: 'Русский' },
        { code: 'it', name: 'Italiano' },
        { code: 'pl', name: 'Polski' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'nl', name: 'Nederlands' }
    ];
    
    const dropdown = document.getElementById('languageDropdown');
    if (!dropdown) return;
    
    dropdown.innerHTML = '';
    
    languages.forEach(lang => {
        const link = document.createElement('a');
        link.className = 'language-option';
        link.href = `view.html?user=${encodeURIComponent(currentUser || '')}&project=${encodeURIComponent(currentProject || '')}&lang=${lang.code}`;
        link.textContent = lang.name;
        link.setAttribute('data-lang', lang.code);
        
        // Check if this is the current language
        const currentLang = getCurrentLanguage();
        if (lang.code === currentLang) {
            link.classList.add('active');
        }
        
        dropdown.appendChild(link);
    });
}

function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (langFromUrl && translations[langFromUrl]) {
        return langFromUrl;
    } else if (savedLang && translations[savedLang]) {
        return savedLang;
    } else if (translations[browserLang]) {
        return browserLang;
    } else if (translations[browserLang.split('-')[0]]) {
        return browserLang.split('-')[0];
    }
    
    return 'en';
}

function selectLanguage(lang) {
    // This function is no longer needed with link approach, but kept for compatibility
    changeLanguage(lang);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const selector = document.querySelector('.language-selector');
    if (selector && !selector.contains(event.target)) {
        document.getElementById('languageDropdown').classList.remove('show');
    }
});

// Update DeepWiki link with current user and project
function updateDeepWikiLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentUser = urlParams.get('user');
    const currentProject = urlParams.get('project');
    
    const deepwikiLink = document.getElementById('deepwikiLink');
    if (deepwikiLink && currentUser && currentProject) {
        deepwikiLink.href = `https://deepwiki.com/${encodeURIComponent(currentUser)}/${encodeURIComponent(currentProject)}`;
    }
}

// Initialize theme and language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Generate language links in dropdown
    generateLanguageLinks();
    
    // Initialize language from URL or localStorage
    const selectedLang = getCurrentLanguage();
    
    // Set initial language
    changeLanguage(selectedLang);
    
    // Update DeepWiki link with current user and project
    updateDeepWikiLink();
});